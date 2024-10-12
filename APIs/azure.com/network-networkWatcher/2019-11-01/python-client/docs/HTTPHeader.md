# HTTPHeader

The HTTP header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name in HTTP header. | [optional] 
**value** | **str** | The value in HTTP header. | [optional] 

## Example

```python
from openapi_client.models.http_header import HTTPHeader

# TODO update the JSON string below
json = "{}"
# create an instance of HTTPHeader from a JSON string
http_header_instance = HTTPHeader.from_json(json)
# print the JSON string representation of the object
print(HTTPHeader.to_json())

# convert the object into a dict
http_header_dict = http_header_instance.to_dict()
# create an instance of HTTPHeader from a dict
http_header_from_dict = HTTPHeader.from_dict(http_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


