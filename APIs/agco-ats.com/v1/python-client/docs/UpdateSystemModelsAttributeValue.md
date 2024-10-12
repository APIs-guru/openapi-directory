# UpdateSystemModelsAttributeValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The attribute name | 
**time_stamp** | **datetime** | Read Only. The timestamp. | [optional] 
**value** | **str** | The value | [optional] 

## Example

```python
from openapi_client.models.update_system_models_attribute_value import UpdateSystemModelsAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsAttributeValue from a JSON string
update_system_models_attribute_value_instance = UpdateSystemModelsAttributeValue.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsAttributeValue.to_json())

# convert the object into a dict
update_system_models_attribute_value_dict = update_system_models_attribute_value_instance.to_dict()
# create an instance of UpdateSystemModelsAttributeValue from a dict
update_system_models_attribute_value_from_dict = UpdateSystemModelsAttributeValue.from_dict(update_system_models_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


