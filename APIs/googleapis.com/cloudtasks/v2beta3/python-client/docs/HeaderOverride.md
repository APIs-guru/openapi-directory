# HeaderOverride

Wraps the Header object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**Header**](Header.md) |  | [optional] 

## Example

```python
from openapi_client.models.header_override import HeaderOverride

# TODO update the JSON string below
json = "{}"
# create an instance of HeaderOverride from a JSON string
header_override_instance = HeaderOverride.from_json(json)
# print the JSON string representation of the object
print(HeaderOverride.to_json())

# convert the object into a dict
header_override_dict = header_override_instance.to_dict()
# create an instance of HeaderOverride from a dict
header_override_from_dict = HeaderOverride.from_dict(header_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


