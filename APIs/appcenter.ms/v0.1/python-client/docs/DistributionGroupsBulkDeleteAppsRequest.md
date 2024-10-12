# DistributionGroupsBulkDeleteAppsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[DistributionGroupsBulkDeleteAppsRequestAppsInner]**](DistributionGroupsBulkDeleteAppsRequestAppsInner.md) | The list of apps to delete from the distribution group | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_bulk_delete_apps_request import DistributionGroupsBulkDeleteAppsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsBulkDeleteAppsRequest from a JSON string
distribution_groups_bulk_delete_apps_request_instance = DistributionGroupsBulkDeleteAppsRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsBulkDeleteAppsRequest.to_json())

# convert the object into a dict
distribution_groups_bulk_delete_apps_request_dict = distribution_groups_bulk_delete_apps_request_instance.to_dict()
# create an instance of DistributionGroupsBulkDeleteAppsRequest from a dict
distribution_groups_bulk_delete_apps_request_from_dict = DistributionGroupsBulkDeleteAppsRequest.from_dict(distribution_groups_bulk_delete_apps_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


