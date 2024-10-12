# InnerError

Data Lake Store inner error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** | the context for the error message | [optional] [readonly] 
**trace** | **str** | the stack trace for the error | [optional] [readonly] 

## Example

```python
from openapi_client.models.inner_error import InnerError

# TODO update the JSON string below
json = "{}"
# create an instance of InnerError from a JSON string
inner_error_instance = InnerError.from_json(json)
# print the JSON string representation of the object
print(InnerError.to_json())

# convert the object into a dict
inner_error_dict = inner_error_instance.to_dict()
# create an instance of InnerError from a dict
inner_error_from_dict = InnerError.from_dict(inner_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


