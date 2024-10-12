# DomainsCheckAvailabilityDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DomainsCheckAvailabilityDefaultResponseError**](DomainsCheckAvailabilityDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.domains_check_availability_default_response import DomainsCheckAvailabilityDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DomainsCheckAvailabilityDefaultResponse from a JSON string
domains_check_availability_default_response_instance = DomainsCheckAvailabilityDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DomainsCheckAvailabilityDefaultResponse.to_json())

# convert the object into a dict
domains_check_availability_default_response_dict = domains_check_availability_default_response_instance.to_dict()
# create an instance of DomainsCheckAvailabilityDefaultResponse from a dict
domains_check_availability_default_response_from_dict = DomainsCheckAvailabilityDefaultResponse.from_dict(domains_check_availability_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


