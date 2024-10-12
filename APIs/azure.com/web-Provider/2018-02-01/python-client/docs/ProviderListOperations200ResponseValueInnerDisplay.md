# ProviderListOperations200ResponseValueInnerDisplay

Meta data about operation used for display in portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**resource** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.provider_list_operations200_response_value_inner_display import ProviderListOperations200ResponseValueInnerDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200ResponseValueInnerDisplay from a JSON string
provider_list_operations200_response_value_inner_display_instance = ProviderListOperations200ResponseValueInnerDisplay.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200ResponseValueInnerDisplay.to_json())

# convert the object into a dict
provider_list_operations200_response_value_inner_display_dict = provider_list_operations200_response_value_inner_display_instance.to_dict()
# create an instance of ProviderListOperations200ResponseValueInnerDisplay from a dict
provider_list_operations200_response_value_inner_display_from_dict = ProviderListOperations200ResponseValueInnerDisplay.from_dict(provider_list_operations200_response_value_inner_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


