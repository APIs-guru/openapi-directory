# ApplicationRole

Details of an application role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_groups** | **List[str]** | The groups that are granted default access for this application role. As a group&#39;s name can change, use of &#x60;defaultGroupsDetails&#x60; is recommended to identify a groups. | [optional] 
**default_groups_details** | [**List[GroupName]**](GroupName.md) | The groups that are granted default access for this application role. | [optional] 
**defined** | **bool** | Deprecated. | [optional] 
**group_details** | [**List[GroupName]**](GroupName.md) | The groups associated with the application role. | [optional] 
**groups** | **List[str]** | The groups associated with the application role. As a group&#39;s name can change, use of &#x60;groupDetails&#x60; is recommended to identify a groups. | [optional] 
**has_unlimited_seats** | **bool** |  | [optional] 
**key** | **str** | The key of the application role. | [optional] 
**name** | **str** | The display name of the application role. | [optional] 
**number_of_seats** | **int** | The maximum count of users on your license. | [optional] 
**platform** | **bool** | Indicates if the application role belongs to Jira platform (&#x60;jira-core&#x60;). | [optional] 
**remaining_seats** | **int** | The count of users remaining on your license. | [optional] 
**selected_by_default** | **bool** | Determines whether this application role should be selected by default on user creation. | [optional] 
**user_count** | **int** | The number of users counting against your license. | [optional] 
**user_count_description** | **str** | The [type of users](https://confluence.atlassian.com/x/lRW3Ng) being counted against your license. | [optional] 

## Example

```python
from openapi_client.models.application_role import ApplicationRole

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationRole from a JSON string
application_role_instance = ApplicationRole.from_json(json)
# print the JSON string representation of the object
print(ApplicationRole.to_json())

# convert the object into a dict
application_role_dict = application_role_instance.to_dict()
# create an instance of ApplicationRole from a dict
application_role_from_dict = ApplicationRole.from_dict(application_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


