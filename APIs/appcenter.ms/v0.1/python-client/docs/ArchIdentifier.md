# ArchIdentifier

An object containing a UUID for an architecture for an iOS app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The architecture that the UUID belongs to, i.e. armv7 or arm64. | 
**uuid** | **str** | The unique identifier. | 

## Example

```python
from openapi_client.models.arch_identifier import ArchIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of ArchIdentifier from a JSON string
arch_identifier_instance = ArchIdentifier.from_json(json)
# print the JSON string representation of the object
print(ArchIdentifier.to_json())

# convert the object into a dict
arch_identifier_dict = arch_identifier_instance.to_dict()
# create an instance of ArchIdentifier from a dict
arch_identifier_from_dict = ArchIdentifier.from_dict(arch_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


