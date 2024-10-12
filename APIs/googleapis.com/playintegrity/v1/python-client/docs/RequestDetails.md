# RequestDetails

Contains the integrity request information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonce** | **str** | Nonce that was provided in the request (which is base64 web-safe no-wrap). | [optional] 
**request_hash** | **str** | Request hash that was provided in the request. | [optional] 
**request_package_name** | **str** | Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity. | [optional] 
**timestamp_millis** | **str** | Required. Timestamp, in milliseconds, of the integrity application request. | [optional] 

## Example

```python
from openapi_client.models.request_details import RequestDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RequestDetails from a JSON string
request_details_instance = RequestDetails.from_json(json)
# print the JSON string representation of the object
print(RequestDetails.to_json())

# convert the object into a dict
request_details_dict = request_details_instance.to_dict()
# create an instance of RequestDetails from a dict
request_details_from_dict = RequestDetails.from_dict(request_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


