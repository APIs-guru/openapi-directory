# Header

Defines a header message. A header can have a key and a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the header. | [optional] 
**value** | **str** | The value of the header. | [optional] 

## Example

```python
from openapi_client.models.header import Header

# TODO update the JSON string below
json = "{}"
# create an instance of Header from a JSON string
header_instance = Header.from_json(json)
# print the JSON string representation of the object
print(Header.to_json())

# convert the object into a dict
header_dict = header_instance.to_dict()
# create an instance of Header from a dict
header_from_dict = Header.from_dict(header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


