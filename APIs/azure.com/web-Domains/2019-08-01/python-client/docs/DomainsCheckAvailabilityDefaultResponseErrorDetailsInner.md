# DomainsCheckAvailabilityDefaultResponseErrorDetailsInner

Detailed errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.domains_check_availability_default_response_error_details_inner import DomainsCheckAvailabilityDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DomainsCheckAvailabilityDefaultResponseErrorDetailsInner from a JSON string
domains_check_availability_default_response_error_details_inner_instance = DomainsCheckAvailabilityDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(DomainsCheckAvailabilityDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
domains_check_availability_default_response_error_details_inner_dict = domains_check_availability_default_response_error_details_inner_instance.to_dict()
# create an instance of DomainsCheckAvailabilityDefaultResponseErrorDetailsInner from a dict
domains_check_availability_default_response_error_details_inner_from_dict = DomainsCheckAvailabilityDefaultResponseErrorDetailsInner.from_dict(domains_check_availability_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


