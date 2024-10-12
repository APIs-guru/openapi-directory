# Versions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | The total count of versions. | [optional] 
**versions** | [**List[AnalyticsVersions200ResponseVersionsInner]**](AnalyticsVersions200ResponseVersionsInner.md) | List of version count. | [optional] 

## Example

```python
from openapi_client.models.versions import Versions

# TODO update the JSON string below
json = "{}"
# create an instance of Versions from a JSON string
versions_instance = Versions.from_json(json)
# print the JSON string representation of the object
print(Versions.to_json())

# convert the object into a dict
versions_dict = versions_instance.to_dict()
# create an instance of Versions from a dict
versions_from_dict = Versions.from_dict(versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


