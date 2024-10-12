# Function5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Function description | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | Function name | [optional] 
**type** | [**Type**](Type.md) |  | [optional] 

## Example

```python
from openapi_client.models.function5 import Function5

# TODO update the JSON string below
json = "{}"
# create an instance of Function5 from a JSON string
function5_instance = Function5.from_json(json)
# print the JSON string representation of the object
print(Function5.to_json())

# convert the object into a dict
function5_dict = function5_instance.to_dict()
# create an instance of Function5 from a dict
function5_from_dict = Function5.from_dict(function5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


