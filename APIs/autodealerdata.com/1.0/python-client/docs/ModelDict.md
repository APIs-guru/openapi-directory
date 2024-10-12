# ModelDict


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_name** | **str** |  | 

## Example

```python
from openapi_client.models.model_dict import ModelDict

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDict from a JSON string
model_dict_instance = ModelDict.from_json(json)
# print the JSON string representation of the object
print(ModelDict.to_json())

# convert the object into a dict
model_dict_dict = model_dict_instance.to_dict()
# create an instance of ModelDict from a dict
model_dict_from_dict = ModelDict.from_dict(model_dict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


