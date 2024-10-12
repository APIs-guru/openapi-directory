# StandardError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | [optional] 
**error** | [**Error400**](Error400.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.standard_error import StandardError

# TODO update the JSON string below
json = "{}"
# create an instance of StandardError from a JSON string
standard_error_instance = StandardError.from_json(json)
# print the JSON string representation of the object
print(StandardError.to_json())

# convert the object into a dict
standard_error_dict = standard_error_instance.to_dict()
# create an instance of StandardError from a dict
standard_error_from_dict = StandardError.from_dict(standard_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


