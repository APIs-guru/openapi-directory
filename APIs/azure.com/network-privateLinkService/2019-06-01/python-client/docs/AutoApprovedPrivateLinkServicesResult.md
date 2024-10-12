# AutoApprovedPrivateLinkServicesResult

An array of private link service id that can be linked to a private end point with auto approved.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[AutoApprovedPrivateLinkService]**](AutoApprovedPrivateLinkService.md) | An array of auto approved private link service. | [optional] 

## Example

```python
from openapi_client.models.auto_approved_private_link_services_result import AutoApprovedPrivateLinkServicesResult

# TODO update the JSON string below
json = "{}"
# create an instance of AutoApprovedPrivateLinkServicesResult from a JSON string
auto_approved_private_link_services_result_instance = AutoApprovedPrivateLinkServicesResult.from_json(json)
# print the JSON string representation of the object
print(AutoApprovedPrivateLinkServicesResult.to_json())

# convert the object into a dict
auto_approved_private_link_services_result_dict = auto_approved_private_link_services_result_instance.to_dict()
# create an instance of AutoApprovedPrivateLinkServicesResult from a dict
auto_approved_private_link_services_result_from_dict = AutoApprovedPrivateLinkServicesResult.from_dict(auto_approved_private_link_services_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


