# UpdateSystemModelsCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[UpdateSystemModelsAttributeValue]**](UpdateSystemModelsAttributeValue.md) |  | [optional] 
**category** | **str** | The category name | 

## Example

```python
from openapi_client.models.update_system_models_category import UpdateSystemModelsCategory

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsCategory from a JSON string
update_system_models_category_instance = UpdateSystemModelsCategory.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsCategory.to_json())

# convert the object into a dict
update_system_models_category_dict = update_system_models_category_instance.to_dict()
# create an instance of UpdateSystemModelsCategory from a dict
update_system_models_category_from_dict = UpdateSystemModelsCategory.from_dict(update_system_models_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


