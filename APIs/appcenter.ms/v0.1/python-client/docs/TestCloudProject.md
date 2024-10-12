# TestCloudProject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**framework_properties** | [**BuildsListToolsetProjects200ResponseTestcloudProjectsInnerFrameworkProperties**](BuildsListToolsetProjects200ResponseTestcloudProjectsInnerFrameworkProperties.md) |  | [optional] 
**framework_type** | **str** |  | 
**path** | **str** | The path to the TestCloud project | 

## Example

```python
from openapi_client.models.test_cloud_project import TestCloudProject

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudProject from a JSON string
test_cloud_project_instance = TestCloudProject.from_json(json)
# print the JSON string representation of the object
print(TestCloudProject.to_json())

# convert the object into a dict
test_cloud_project_dict = test_cloud_project_instance.to_dict()
# create an instance of TestCloudProject from a dict
test_cloud_project_from_dict = TestCloudProject.from_dict(test_cloud_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


