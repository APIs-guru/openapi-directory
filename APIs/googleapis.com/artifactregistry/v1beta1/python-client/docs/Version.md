# Version

The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the version was created. | [optional] 
**description** | **str** | Optional. Description of the version, as specified in its metadata. | [optional] 
**name** | **str** | The name of the version, for example: \&quot;projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1\&quot;. If the package or version ID parts contain slashes, the slashes are escaped. | [optional] 
**related_tags** | [**List[Tag]**](Tag.md) | Output only. A list of related tags. Will contain up to 100 tags that reference this version. | [optional] 
**update_time** | **str** | The time when the version was last updated. | [optional] 

## Example

```python
from openapi_client.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


