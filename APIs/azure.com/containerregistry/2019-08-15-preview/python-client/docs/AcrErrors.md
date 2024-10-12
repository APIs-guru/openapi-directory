# AcrErrors

Acr error response describing why the operation failed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[AcrErrorInfo]**](AcrErrorInfo.md) | Array of detailed error | [optional] 

## Example

```python
from openapi_client.models.acr_errors import AcrErrors

# TODO update the JSON string below
json = "{}"
# create an instance of AcrErrors from a JSON string
acr_errors_instance = AcrErrors.from_json(json)
# print the JSON string representation of the object
print(AcrErrors.to_json())

# convert the object into a dict
acr_errors_dict = acr_errors_instance.to_dict()
# create an instance of AcrErrors from a dict
acr_errors_from_dict = AcrErrors.from_dict(acr_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


