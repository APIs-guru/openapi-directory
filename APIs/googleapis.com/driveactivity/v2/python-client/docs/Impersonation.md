# Impersonation

Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impersonated_user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.impersonation import Impersonation

# TODO update the JSON string below
json = "{}"
# create an instance of Impersonation from a JSON string
impersonation_instance = Impersonation.from_json(json)
# print the JSON string representation of the object
print(Impersonation.to_json())

# convert the object into a dict
impersonation_dict = impersonation_instance.to_dict()
# create an instance of Impersonation from a dict
impersonation_from_dict = Impersonation.from_dict(impersonation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


