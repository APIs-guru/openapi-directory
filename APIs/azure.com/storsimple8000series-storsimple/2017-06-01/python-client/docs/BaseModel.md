# BaseModel

Represents the base class for all other ARM object models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.base_model import BaseModel

# TODO update the JSON string below
json = "{}"
# create an instance of BaseModel from a JSON string
base_model_instance = BaseModel.from_json(json)
# print the JSON string representation of the object
print(BaseModel.to_json())

# convert the object into a dict
base_model_dict = base_model_instance.to_dict()
# create an instance of BaseModel from a dict
base_model_from_dict = BaseModel.from_dict(base_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


