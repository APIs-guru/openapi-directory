# PrereleaseVersionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform** | [**Platform**](Platform.md) |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.prerelease_version_attributes import PrereleaseVersionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PrereleaseVersionAttributes from a JSON string
prerelease_version_attributes_instance = PrereleaseVersionAttributes.from_json(json)
# print the JSON string representation of the object
print(PrereleaseVersionAttributes.to_json())

# convert the object into a dict
prerelease_version_attributes_dict = prerelease_version_attributes_instance.to_dict()
# create an instance of PrereleaseVersionAttributes from a dict
prerelease_version_attributes_from_dict = PrereleaseVersionAttributes.from_dict(prerelease_version_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


