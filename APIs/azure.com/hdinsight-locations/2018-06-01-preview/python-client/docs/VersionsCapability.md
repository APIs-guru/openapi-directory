# VersionsCapability

The version capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | [**List[VersionSpec]**](VersionSpec.md) | The list of version capabilities. | [optional] 

## Example

```python
from openapi_client.models.versions_capability import VersionsCapability

# TODO update the JSON string below
json = "{}"
# create an instance of VersionsCapability from a JSON string
versions_capability_instance = VersionsCapability.from_json(json)
# print the JSON string representation of the object
print(VersionsCapability.to_json())

# convert the object into a dict
versions_capability_dict = versions_capability_instance.to_dict()
# create an instance of VersionsCapability from a dict
versions_capability_from_dict = VersionsCapability.from_dict(versions_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


