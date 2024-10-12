# ErrorNotFound


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | A human readable description of the error XXX | [optional] 
**message** | **str** | A longer description of the error YYY | [optional] 
**status** | **int** | The HTTP Status code of the error | [optional] 

## Example

```python
from openapi_client.models.error_not_found import ErrorNotFound

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorNotFound from a JSON string
error_not_found_instance = ErrorNotFound.from_json(json)
# print the JSON string representation of the object
print(ErrorNotFound.to_json())

# convert the object into a dict
error_not_found_dict = error_not_found_instance.to_dict()
# create an instance of ErrorNotFound from a dict
error_not_found_from_dict = ErrorNotFound.from_dict(error_not_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


