# ErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**error_id** | **int** |  | [optional] 
**error_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.errors_inner import ErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsInner from a JSON string
errors_inner_instance = ErrorsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorsInner.to_json())

# convert the object into a dict
errors_inner_dict = errors_inner_instance.to_dict()
# create an instance of ErrorsInner from a dict
errors_inner_from_dict = ErrorsInner.from_dict(errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


