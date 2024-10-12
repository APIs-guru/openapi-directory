# AppsOutage

An outage incident reported for a Google Workspace service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dashboard_uri** | **str** | Link to the outage event in Google Workspace Status Dashboard | [optional] 
**incident_tracking_id** | **str** | Incident tracking ID. | [optional] 
**merge_info** | [**MergeInfo**](MergeInfo.md) |  | [optional] 
**next_update_time** | **str** | Timestamp by which the next update is expected to arrive. | [optional] 
**products** | **List[str]** | List of products impacted by the outage. | [optional] 
**resolution_time** | **str** | Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known. | [optional] 
**status** | **str** | Current outage status. | [optional] 

## Example

```python
from openapi_client.models.apps_outage import AppsOutage

# TODO update the JSON string below
json = "{}"
# create an instance of AppsOutage from a JSON string
apps_outage_instance = AppsOutage.from_json(json)
# print the JSON string representation of the object
print(AppsOutage.to_json())

# convert the object into a dict
apps_outage_dict = apps_outage_instance.to_dict()
# create an instance of AppsOutage from a dict
apps_outage_from_dict = AppsOutage.from_dict(apps_outage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


