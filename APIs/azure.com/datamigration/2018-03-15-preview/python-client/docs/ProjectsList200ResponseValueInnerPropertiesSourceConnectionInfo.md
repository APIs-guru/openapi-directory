# ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo

Defines the connection properties of a server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password credential. | [optional] 
**type** | **str** | Type of connection info | 
**user_name** | **str** | User name | [optional] 

## Example

```python
from openapi_client.models.projects_list200_response_value_inner_properties_source_connection_info import ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo from a JSON string
projects_list200_response_value_inner_properties_source_connection_info_instance = ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo.from_json(json)
# print the JSON string representation of the object
print(ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo.to_json())

# convert the object into a dict
projects_list200_response_value_inner_properties_source_connection_info_dict = projects_list200_response_value_inner_properties_source_connection_info_instance.to_dict()
# create an instance of ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo from a dict
projects_list200_response_value_inner_properties_source_connection_info_from_dict = ProjectsList200ResponseValueInnerPropertiesSourceConnectionInfo.from_dict(projects_list200_response_value_inner_properties_source_connection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


