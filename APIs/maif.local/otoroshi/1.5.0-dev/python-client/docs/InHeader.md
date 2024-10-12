# InHeader

JWT location in a header

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the header | 
**remove** | **str** | Remove regex inside the value, like &#39;Bearer &#39; | 
**type** | **str** | String with value InHeader | 

## Example

```python
from openapi_client.models.in_header import InHeader

# TODO update the JSON string below
json = "{}"
# create an instance of InHeader from a JSON string
in_header_instance = InHeader.from_json(json)
# print the JSON string representation of the object
print(InHeader.to_json())

# convert the object into a dict
in_header_dict = in_header_instance.to_dict()
# create an instance of InHeader from a dict
in_header_from_dict = InHeader.from_dict(in_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


