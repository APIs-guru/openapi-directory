# Model500ErrorObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**status** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.model500_error_object import Model500ErrorObject

# TODO update the JSON string below
json = "{}"
# create an instance of Model500ErrorObject from a JSON string
model500_error_object_instance = Model500ErrorObject.from_json(json)
# print the JSON string representation of the object
print(Model500ErrorObject.to_json())

# convert the object into a dict
model500_error_object_dict = model500_error_object_instance.to_dict()
# create an instance of Model500ErrorObject from a dict
model500_error_object_from_dict = Model500ErrorObject.from_dict(model500_error_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


