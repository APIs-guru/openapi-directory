# HttpMethodCodeJsonldGet

The HttpMethodCode resource is a set of codes that describes the possible methods that can used used when making an HTTP request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_name** | **str** | The name of the code. | [optional] [readonly] 
**id** | **str** | The unique identifier of the resource instance. | [optional] 

## Example

```python
from openapi_client.models.http_method_code_jsonld_get import HttpMethodCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of HttpMethodCodeJsonldGet from a JSON string
http_method_code_jsonld_get_instance = HttpMethodCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(HttpMethodCodeJsonldGet.to_json())

# convert the object into a dict
http_method_code_jsonld_get_dict = http_method_code_jsonld_get_instance.to_dict()
# create an instance of HttpMethodCodeJsonldGet from a dict
http_method_code_jsonld_get_from_dict = HttpMethodCodeJsonldGet.from_dict(http_method_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


