# ResizeError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**values** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 

## Example

```python
from openapi_client.models.resize_error import ResizeError

# TODO update the JSON string below
json = "{}"
# create an instance of ResizeError from a JSON string
resize_error_instance = ResizeError.from_json(json)
# print the JSON string representation of the object
print(ResizeError.to_json())

# convert the object into a dict
resize_error_dict = resize_error_instance.to_dict()
# create an instance of ResizeError from a dict
resize_error_from_dict = ResizeError.from_dict(resize_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


