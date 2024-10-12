# LegacyAbac

Configuration for the legacy Attribute Based Access Control authorization mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. | [optional] 

## Example

```python
from openapi_client.models.legacy_abac import LegacyAbac

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAbac from a JSON string
legacy_abac_instance = LegacyAbac.from_json(json)
# print the JSON string representation of the object
print(LegacyAbac.to_json())

# convert the object into a dict
legacy_abac_dict = legacy_abac_instance.to_dict()
# create an instance of LegacyAbac from a dict
legacy_abac_from_dict = LegacyAbac.from_dict(legacy_abac_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


