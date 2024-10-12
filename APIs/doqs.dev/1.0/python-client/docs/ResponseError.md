# ResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 

## Example

```python
from openapi_client.models.response_error import ResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseError from a JSON string
response_error_instance = ResponseError.from_json(json)
# print the JSON string representation of the object
print(ResponseError.to_json())

# convert the object into a dict
response_error_dict = response_error_instance.to_dict()
# create an instance of ResponseError from a dict
response_error_from_dict = ResponseError.from_dict(response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


