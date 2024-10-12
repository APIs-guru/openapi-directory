# PrereleaseVersionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PrereleaseVersion**](PrereleaseVersion.md) |  | 
**included** | [**List[PreReleaseVersionsResponseIncludedInner]**](PreReleaseVersionsResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.prerelease_version_response import PrereleaseVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PrereleaseVersionResponse from a JSON string
prerelease_version_response_instance = PrereleaseVersionResponse.from_json(json)
# print the JSON string representation of the object
print(PrereleaseVersionResponse.to_json())

# convert the object into a dict
prerelease_version_response_dict = prerelease_version_response_instance.to_dict()
# create an instance of PrereleaseVersionResponse from a dict
prerelease_version_response_from_dict = PrereleaseVersionResponse.from_dict(prerelease_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


