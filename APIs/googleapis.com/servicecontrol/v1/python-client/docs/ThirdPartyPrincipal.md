# ThirdPartyPrincipal

Third party identity principal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**third_party_claims** | **Dict[str, object]** | Metadata about third party identity. | [optional] 

## Example

```python
from openapi_client.models.third_party_principal import ThirdPartyPrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyPrincipal from a JSON string
third_party_principal_instance = ThirdPartyPrincipal.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyPrincipal.to_json())

# convert the object into a dict
third_party_principal_dict = third_party_principal_instance.to_dict()
# create an instance of ThirdPartyPrincipal from a dict
third_party_principal_from_dict = ThirdPartyPrincipal.from_dict(third_party_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


