# ModelError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.model_error import ModelError

# TODO update the JSON string below
json = "{}"
# create an instance of ModelError from a JSON string
model_error_instance = ModelError.from_json(json)
# print the JSON string representation of the object
print(ModelError.to_json())

# convert the object into a dict
model_error_dict = model_error_instance.to_dict()
# create an instance of ModelError from a dict
model_error_from_dict = ModelError.from_dict(model_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


