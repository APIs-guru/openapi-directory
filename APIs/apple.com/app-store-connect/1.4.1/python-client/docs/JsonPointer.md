# JsonPointer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pointer** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.json_pointer import JsonPointer

# TODO update the JSON string below
json = "{}"
# create an instance of JsonPointer from a JSON string
json_pointer_instance = JsonPointer.from_json(json)
# print the JSON string representation of the object
print(JsonPointer.to_json())

# convert the object into a dict
json_pointer_dict = json_pointer_instance.to_dict()
# create an instance of JsonPointer from a dict
json_pointer_from_dict = JsonPointer.from_dict(json_pointer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


