# ErrorModelDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | This represents the error code | [optional] 
**message** | **str** | This represents the error message | [optional] 
**target** | **str** | This represents the target of the error message | [optional] 

## Example

```python
from openapi_client.models.error_model_details_inner import ErrorModelDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorModelDetailsInner from a JSON string
error_model_details_inner_instance = ErrorModelDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorModelDetailsInner.to_json())

# convert the object into a dict
error_model_details_inner_dict = error_model_details_inner_instance.to_dict()
# create an instance of ErrorModelDetailsInner from a dict
error_model_details_inner_from_dict = ErrorModelDetailsInner.from_dict(error_model_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


