# PrereleaseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PrereleaseVersionAttributes**](PrereleaseVersionAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**PrereleaseVersionRelationships**](PrereleaseVersionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.prerelease_version import PrereleaseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of PrereleaseVersion from a JSON string
prerelease_version_instance = PrereleaseVersion.from_json(json)
# print the JSON string representation of the object
print(PrereleaseVersion.to_json())

# convert the object into a dict
prerelease_version_dict = prerelease_version_instance.to_dict()
# create an instance of PrereleaseVersion from a dict
prerelease_version_from_dict = PrereleaseVersion.from_dict(prerelease_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


