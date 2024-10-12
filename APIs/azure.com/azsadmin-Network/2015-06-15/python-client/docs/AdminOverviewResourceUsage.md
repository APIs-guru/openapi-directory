# AdminOverviewResourceUsage

Resource usage information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_use_resource_count** | **int** | Number of resources in use. | [optional] [readonly] 
**total_resource_count** | **int** | Total number of resources. | [optional] [readonly] 

## Example

```python
from openapi_client.models.admin_overview_resource_usage import AdminOverviewResourceUsage

# TODO update the JSON string below
json = "{}"
# create an instance of AdminOverviewResourceUsage from a JSON string
admin_overview_resource_usage_instance = AdminOverviewResourceUsage.from_json(json)
# print the JSON string representation of the object
print(AdminOverviewResourceUsage.to_json())

# convert the object into a dict
admin_overview_resource_usage_dict = admin_overview_resource_usage_instance.to_dict()
# create an instance of AdminOverviewResourceUsage from a dict
admin_overview_resource_usage_from_dict = AdminOverviewResourceUsage.from_dict(admin_overview_resource_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


