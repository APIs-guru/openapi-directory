# Tag

Tags point to a version and represent an alternative name that can be used to access the version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the tag, for example: \&quot;projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1\&quot;. If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\\-._~:@], anything else must be URL encoded. | [optional] 
**version** | **str** | The name of the version the tag refers to, for example: \&quot;projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811\&quot; If the package or version ID parts contain slashes, the slashes are escaped. | [optional] 

## Example

```python
from openapi_client.models.tag import Tag

# TODO update the JSON string below
json = "{}"
# create an instance of Tag from a JSON string
tag_instance = Tag.from_json(json)
# print the JSON string representation of the object
print(Tag.to_json())

# convert the object into a dict
tag_dict = tag_instance.to_dict()
# create an instance of Tag from a dict
tag_from_dict = Tag.from_dict(tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


