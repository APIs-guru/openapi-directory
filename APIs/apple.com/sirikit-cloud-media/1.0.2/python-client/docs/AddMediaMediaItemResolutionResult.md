# AddMediaMediaItemResolutionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | [optional] 
**confirmation_required** | **object** |  | [optional] 
**disambiguation** | **object** |  | [optional] 
**success** | **object** |  | [optional] 
**unsupported** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.add_media_media_item_resolution_result import AddMediaMediaItemResolutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of AddMediaMediaItemResolutionResult from a JSON string
add_media_media_item_resolution_result_instance = AddMediaMediaItemResolutionResult.from_json(json)
# print the JSON string representation of the object
print(AddMediaMediaItemResolutionResult.to_json())

# convert the object into a dict
add_media_media_item_resolution_result_dict = add_media_media_item_resolution_result_instance.to_dict()
# create an instance of AddMediaMediaItemResolutionResult from a dict
add_media_media_item_resolution_result_from_dict = AddMediaMediaItemResolutionResult.from_dict(add_media_media_item_resolution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


