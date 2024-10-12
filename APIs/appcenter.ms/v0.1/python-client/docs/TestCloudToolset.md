# TestCloudToolset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projects** | [**List[BuildsListToolsetProjects200ResponseTestcloudProjectsInner]**](BuildsListToolsetProjects200ResponseTestcloudProjectsInner.md) | The TestCloud projects detected | 

## Example

```python
from openapi_client.models.test_cloud_toolset import TestCloudToolset

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudToolset from a JSON string
test_cloud_toolset_instance = TestCloudToolset.from_json(json)
# print the JSON string representation of the object
print(TestCloudToolset.to_json())

# convert the object into a dict
test_cloud_toolset_dict = test_cloud_toolset_instance.to_dict()
# create an instance of TestCloudToolset from a dict
test_cloud_toolset_from_dict = TestCloudToolset.from_dict(test_cloud_toolset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


