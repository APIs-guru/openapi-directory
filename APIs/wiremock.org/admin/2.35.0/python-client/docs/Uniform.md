# Uniform

Uniformly distributed random response delay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**upper** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.uniform import Uniform

# TODO update the JSON string below
json = "{}"
# create an instance of Uniform from a JSON string
uniform_instance = Uniform.from_json(json)
# print the JSON string representation of the object
print(Uniform.to_json())

# convert the object into a dict
uniform_dict = uniform_instance.to_dict()
# create an instance of Uniform from a dict
uniform_from_dict = Uniform.from_dict(uniform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


