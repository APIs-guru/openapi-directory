# AdminOverviewResourceHealth

Resource health information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_resource_count** | **int** | Number of resources in the error state. | [optional] [readonly] 
**health_unknown_count** | **int** | Number of resources in an unknown state. | [optional] [readonly] 
**healthy_resource_count** | **int** | Number of resources in the success state. | [optional] [readonly] 
**total_resource_count** | **int** | Total number of resources. | [optional] [readonly] 
**warning_resource_count** | **int** | Number of resources in the warning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.admin_overview_resource_health import AdminOverviewResourceHealth

# TODO update the JSON string below
json = "{}"
# create an instance of AdminOverviewResourceHealth from a JSON string
admin_overview_resource_health_instance = AdminOverviewResourceHealth.from_json(json)
# print the JSON string representation of the object
print(AdminOverviewResourceHealth.to_json())

# convert the object into a dict
admin_overview_resource_health_dict = admin_overview_resource_health_instance.to_dict()
# create an instance of AdminOverviewResourceHealth from a dict
admin_overview_resource_health_from_dict = AdminOverviewResourceHealth.from_dict(admin_overview_resource_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


