# ErrorUnauthorized


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | A human readable description of the error | [optional] 
**message** | **str** | A longer description of the error | [optional] 
**status** | **int** | The HTTP Status code of the error | [optional] 

## Example

```python
from openapi_client.models.error_unauthorized import ErrorUnauthorized

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorUnauthorized from a JSON string
error_unauthorized_instance = ErrorUnauthorized.from_json(json)
# print the JSON string representation of the object
print(ErrorUnauthorized.to_json())

# convert the object into a dict
error_unauthorized_dict = error_unauthorized_instance.to_dict()
# create an instance of ErrorUnauthorized from a dict
error_unauthorized_from_dict = ErrorUnauthorized.from_dict(error_unauthorized_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


