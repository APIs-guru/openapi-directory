# NotificationSchemeAndProjectMappingJsonBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_scheme_id** | **str** |  | [optional] 
**project_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_scheme_and_project_mapping_json_bean import NotificationSchemeAndProjectMappingJsonBean

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSchemeAndProjectMappingJsonBean from a JSON string
notification_scheme_and_project_mapping_json_bean_instance = NotificationSchemeAndProjectMappingJsonBean.from_json(json)
# print the JSON string representation of the object
print(NotificationSchemeAndProjectMappingJsonBean.to_json())

# convert the object into a dict
notification_scheme_and_project_mapping_json_bean_dict = notification_scheme_and_project_mapping_json_bean_instance.to_dict()
# create an instance of NotificationSchemeAndProjectMappingJsonBean from a dict
notification_scheme_and_project_mapping_json_bean_from_dict = NotificationSchemeAndProjectMappingJsonBean.from_dict(notification_scheme_and_project_mapping_json_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


