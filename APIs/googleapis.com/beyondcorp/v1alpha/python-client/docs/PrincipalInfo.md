# PrincipalInfo

PrincipalInfo represents an Identity oneof.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.principal_info import PrincipalInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PrincipalInfo from a JSON string
principal_info_instance = PrincipalInfo.from_json(json)
# print the JSON string representation of the object
print(PrincipalInfo.to_json())

# convert the object into a dict
principal_info_dict = principal_info_instance.to_dict()
# create an instance of PrincipalInfo from a dict
principal_info_from_dict = PrincipalInfo.from_dict(principal_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


