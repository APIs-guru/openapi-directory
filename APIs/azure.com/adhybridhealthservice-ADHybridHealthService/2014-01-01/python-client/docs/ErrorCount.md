# ErrorCount

The error count details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The error count. | [optional] 
**error_bucket** | **str** | The error bucket. | [optional] 
**truncated** | **bool** | Indicates if the error count is truncated or not. | [optional] 

## Example

```python
from openapi_client.models.error_count import ErrorCount

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorCount from a JSON string
error_count_instance = ErrorCount.from_json(json)
# print the JSON string representation of the object
print(ErrorCount.to_json())

# convert the object into a dict
error_count_dict = error_count_instance.to_dict()
# create an instance of ErrorCount from a dict
error_count_from_dict = ErrorCount.from_dict(error_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


