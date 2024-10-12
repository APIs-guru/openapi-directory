# ErrorWithLabelIdResponseBody

An error response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 

## Example

```python
from openapi_client.models.error_with_label_id_response_body import ErrorWithLabelIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorWithLabelIdResponseBody from a JSON string
error_with_label_id_response_body_instance = ErrorWithLabelIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(ErrorWithLabelIdResponseBody.to_json())

# convert the object into a dict
error_with_label_id_response_body_dict = error_with_label_id_response_body_instance.to_dict()
# create an instance of ErrorWithLabelIdResponseBody from a dict
error_with_label_id_response_body_from_dict = ErrorWithLabelIdResponseBody.from_dict(error_with_label_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


