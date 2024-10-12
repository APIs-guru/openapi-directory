# HttpMethodCodeGet

The HttpMethodCode resource is a set of codes that describes the possible methods that can used used when making an HTTP request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_name** | **str** | The name of the code. | [optional] [readonly] 
**id** | **str** | The unique identifier of the resource instance. | [optional] 

## Example

```python
from openapi_client.models.http_method_code_get import HttpMethodCodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of HttpMethodCodeGet from a JSON string
http_method_code_get_instance = HttpMethodCodeGet.from_json(json)
# print the JSON string representation of the object
print(HttpMethodCodeGet.to_json())

# convert the object into a dict
http_method_code_get_dict = http_method_code_get_instance.to_dict()
# create an instance of HttpMethodCodeGet from a dict
http_method_code_get_from_dict = HttpMethodCodeGet.from_dict(http_method_code_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


