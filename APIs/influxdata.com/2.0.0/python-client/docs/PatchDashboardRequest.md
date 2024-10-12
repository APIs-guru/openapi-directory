# PatchDashboardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | [**CellWithViewProperties**](CellWithViewProperties.md) |  | [optional] 
**description** | **str** | optional, when provided will replace the description | [optional] 
**name** | **str** | optional, when provided will replace the name | [optional] 

## Example

```python
from openapi_client.models.patch_dashboard_request import PatchDashboardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchDashboardRequest from a JSON string
patch_dashboard_request_instance = PatchDashboardRequest.from_json(json)
# print the JSON string representation of the object
print(PatchDashboardRequest.to_json())

# convert the object into a dict
patch_dashboard_request_dict = patch_dashboard_request_instance.to_dict()
# create an instance of PatchDashboardRequest from a dict
patch_dashboard_request_from_dict = PatchDashboardRequest.from_dict(patch_dashboard_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


