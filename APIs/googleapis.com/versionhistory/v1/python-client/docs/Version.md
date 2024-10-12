# Version

Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Version name. Format is \&quot;{product}/platforms/{platform}/channels/{channel}/versions/{version}\&quot; e.g. \&quot;chrome/platforms/win/channels/beta/versions/84.0.4147.38\&quot; | [optional] 
**version** | **str** | String containing just the version number. e.g. \&quot;84.0.4147.38\&quot; | [optional] 

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


