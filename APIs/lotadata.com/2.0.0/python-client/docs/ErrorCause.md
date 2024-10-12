# ErrorCause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**rule** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_cause import ErrorCause

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorCause from a JSON string
error_cause_instance = ErrorCause.from_json(json)
# print the JSON string representation of the object
print(ErrorCause.to_json())

# convert the object into a dict
error_cause_dict = error_cause_instance.to_dict()
# create an instance of ErrorCause from a dict
error_cause_from_dict = ErrorCause.from_dict(error_cause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


