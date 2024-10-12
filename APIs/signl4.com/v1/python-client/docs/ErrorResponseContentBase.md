# ErrorResponseContentBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_response_content_base import ErrorResponseContentBase

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseContentBase from a JSON string
error_response_content_base_instance = ErrorResponseContentBase.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseContentBase.to_json())

# convert the object into a dict
error_response_content_base_dict = error_response_content_base_instance.to_dict()
# create an instance of ErrorResponseContentBase from a dict
error_response_content_base_from_dict = ErrorResponseContentBase.from_dict(error_response_content_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


