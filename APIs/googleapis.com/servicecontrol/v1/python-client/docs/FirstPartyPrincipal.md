# FirstPartyPrincipal

First party identity principal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_email** | **str** | The email address of a Google account. . | [optional] 
**service_metadata** | **Dict[str, object]** | Metadata about the service that uses the service account. . | [optional] 

## Example

```python
from openapi_client.models.first_party_principal import FirstPartyPrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of FirstPartyPrincipal from a JSON string
first_party_principal_instance = FirstPartyPrincipal.from_json(json)
# print the JSON string representation of the object
print(FirstPartyPrincipal.to_json())

# convert the object into a dict
first_party_principal_dict = first_party_principal_instance.to_dict()
# create an instance of FirstPartyPrincipal from a dict
first_party_principal_from_dict = FirstPartyPrincipal.from_dict(first_party_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


