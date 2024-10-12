# ErrorDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] [readonly] 
**message** | **str** | If available, a human readable description of the error. | [optional] [readonly] 
**target** | **str** | If available, the component generating the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.error_details_inner import ErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDetailsInner from a JSON string
error_details_inner_instance = ErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorDetailsInner.to_json())

# convert the object into a dict
error_details_inner_dict = error_details_inner_instance.to_dict()
# create an instance of ErrorDetailsInner from a dict
error_details_inner_from_dict = ErrorDetailsInner.from_dict(error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


