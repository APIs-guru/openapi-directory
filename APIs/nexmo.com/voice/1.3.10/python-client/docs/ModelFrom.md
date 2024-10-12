# ModelFrom

The endpoint you called from. Possible values are the same as `to`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_from import ModelFrom

# TODO update the JSON string below
json = "{}"
# create an instance of ModelFrom from a JSON string
model_from_instance = ModelFrom.from_json(json)
# print the JSON string representation of the object
print(ModelFrom.to_json())

# convert the object into a dict
model_from_dict = model_from_instance.to_dict()
# create an instance of ModelFrom from a dict
model_from_from_dict = ModelFrom.from_dict(model_from_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


