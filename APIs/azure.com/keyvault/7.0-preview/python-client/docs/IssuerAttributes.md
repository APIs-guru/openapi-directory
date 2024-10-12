# IssuerAttributes

The attributes of an issuer managed by the Key Vault service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Creation time in UTC. | [optional] [readonly] 
**enabled** | **bool** | Determines whether the issuer is enabled. | [optional] 
**updated** | **int** | Last updated time in UTC. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issuer_attributes import IssuerAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerAttributes from a JSON string
issuer_attributes_instance = IssuerAttributes.from_json(json)
# print the JSON string representation of the object
print(IssuerAttributes.to_json())

# convert the object into a dict
issuer_attributes_dict = issuer_attributes_instance.to_dict()
# create an instance of IssuerAttributes from a dict
issuer_attributes_from_dict = IssuerAttributes.from_dict(issuer_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


