# ErrorModel1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The error models&#39; description | [optional] 
**error_category** | **str** | The error models&#39; error category | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_model1 import ErrorModel1

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorModel1 from a JSON string
error_model1_instance = ErrorModel1.from_json(json)
# print the JSON string representation of the object
print(ErrorModel1.to_json())

# convert the object into a dict
error_model1_dict = error_model1_instance.to_dict()
# create an instance of ErrorModel1 from a dict
error_model1_from_dict = ErrorModel1.from_dict(error_model1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


