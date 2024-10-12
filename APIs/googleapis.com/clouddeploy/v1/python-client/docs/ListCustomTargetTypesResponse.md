# ListCustomTargetTypesResponse

The response object from `ListCustomTargetTypes.`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_target_types** | [**List[CustomTargetType]**](CustomTargetType.md) | The &#x60;CustomTargetType&#x60; objects. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_custom_target_types_response import ListCustomTargetTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomTargetTypesResponse from a JSON string
list_custom_target_types_response_instance = ListCustomTargetTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomTargetTypesResponse.to_json())

# convert the object into a dict
list_custom_target_types_response_dict = list_custom_target_types_response_instance.to_dict()
# create an instance of ListCustomTargetTypesResponse from a dict
list_custom_target_types_response_from_dict = ListCustomTargetTypesResponse.from_dict(list_custom_target_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


