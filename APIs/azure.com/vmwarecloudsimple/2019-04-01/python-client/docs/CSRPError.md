# CSRPError

General error model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CSRPErrorBody**](CSRPErrorBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.csrp_error import CSRPError

# TODO update the JSON string below
json = "{}"
# create an instance of CSRPError from a JSON string
csrp_error_instance = CSRPError.from_json(json)
# print the JSON string representation of the object
print(CSRPError.to_json())

# convert the object into a dict
csrp_error_dict = csrp_error_instance.to_dict()
# create an instance of CSRPError from a dict
csrp_error_from_dict = CSRPError.from_dict(csrp_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


