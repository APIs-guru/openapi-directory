# PatchableDashboard

The shared dashboard resource definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DashboardProperties**](DashboardProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.patchable_dashboard import PatchableDashboard

# TODO update the JSON string below
json = "{}"
# create an instance of PatchableDashboard from a JSON string
patchable_dashboard_instance = PatchableDashboard.from_json(json)
# print the JSON string representation of the object
print(PatchableDashboard.to_json())

# convert the object into a dict
patchable_dashboard_dict = patchable_dashboard_instance.to_dict()
# create an instance of PatchableDashboard from a dict
patchable_dashboard_from_dict = PatchableDashboard.from_dict(patchable_dashboard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


