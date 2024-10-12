# Input


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique, non-empty document identifier. | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.input import Input

# TODO update the JSON string below
json = "{}"
# create an instance of Input from a JSON string
input_instance = Input.from_json(json)
# print the JSON string representation of the object
print(Input.to_json())

# convert the object into a dict
input_dict = input_instance.to_dict()
# create an instance of Input from a dict
input_from_dict = Input.from_dict(input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


