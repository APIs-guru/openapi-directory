# DashboardAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | **str** | URI of resource. | [optional] [readonly] 
**labels** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**org** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dashboard_all_of_links import DashboardAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardAllOfLinks from a JSON string
dashboard_all_of_links_instance = DashboardAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(DashboardAllOfLinks.to_json())

# convert the object into a dict
dashboard_all_of_links_dict = dashboard_all_of_links_instance.to_dict()
# create an instance of DashboardAllOfLinks from a dict
dashboard_all_of_links_from_dict = DashboardAllOfLinks.from_dict(dashboard_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


