# ReconfigureTrustRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust** | [**Trust**](Trust.md) |  | [optional] 

## Example

```python
from openapi_client.models.reconfigure_trust_request import ReconfigureTrustRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReconfigureTrustRequest from a JSON string
reconfigure_trust_request_instance = ReconfigureTrustRequest.from_json(json)
# print the JSON string representation of the object
print(ReconfigureTrustRequest.to_json())

# convert the object into a dict
reconfigure_trust_request_dict = reconfigure_trust_request_instance.to_dict()
# create an instance of ReconfigureTrustRequest from a dict
reconfigure_trust_request_from_dict = ReconfigureTrustRequest.from_dict(reconfigure_trust_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


