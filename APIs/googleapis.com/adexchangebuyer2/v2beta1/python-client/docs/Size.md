# Size

Message depicting the size of the creative. The units of width and height depend on the type of the targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the creative. | [optional] 
**width** | **int** | The width of the creative | [optional] 

## Example

```python
from openapi_client.models.size import Size

# TODO update the JSON string below
json = "{}"
# create an instance of Size from a JSON string
size_instance = Size.from_json(json)
# print the JSON string representation of the object
print(Size.to_json())

# convert the object into a dict
size_dict = size_instance.to_dict()
# create an instance of Size from a dict
size_from_dict = Size.from_dict(size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


