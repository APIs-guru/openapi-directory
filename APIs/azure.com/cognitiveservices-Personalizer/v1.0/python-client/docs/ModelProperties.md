# ModelProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** |  | [optional] [readonly] 
**last_modified_time** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.model_properties import ModelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperties from a JSON string
model_properties_instance = ModelProperties.from_json(json)
# print the JSON string representation of the object
print(ModelProperties.to_json())

# convert the object into a dict
model_properties_dict = model_properties_instance.to_dict()
# create an instance of ModelProperties from a dict
model_properties_from_dict = ModelProperties.from_dict(model_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


