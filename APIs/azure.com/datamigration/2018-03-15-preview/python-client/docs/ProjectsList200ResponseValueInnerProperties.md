# ProjectsList200ResponseValueInnerProperties

Project-specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | UTC Date and time when project was created | [optional] [readonly] 
**databases_info** | [**List[ProjectsList200ResponseValueInnerPropertiesDatabasesInfoInner]**](ProjectsList200ResponseValueInnerPropertiesDatabasesInfoInner.md) | List of DatabaseInfo | [optional] 
**provisioning_state** | **str** | The project&#39;s provisioning state | [optional] [readonly] 
**source_connection_info** | [**ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo**](ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo.md) |  | [optional] 
**source_platform** | **str** | Source platform of the project | 
**target_connection_info** | [**ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo**](ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo.md) |  | [optional] 
**target_platform** | **str** | Target platform of the project | 

## Example

```python
from openapi_client.models.projects_list200_response_value_inner_properties import ProjectsList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsList200ResponseValueInnerProperties from a JSON string
projects_list200_response_value_inner_properties_instance = ProjectsList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ProjectsList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
projects_list200_response_value_inner_properties_dict = projects_list200_response_value_inner_properties_instance.to_dict()
# create an instance of ProjectsList200ResponseValueInnerProperties from a dict
projects_list200_response_value_inner_properties_from_dict = ProjectsList200ResponseValueInnerProperties.from_dict(projects_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


