# SapWorkloadOverview

The overview of sap workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_sid** | **str** | Output only. The application SID | [optional] [readonly] 
**db_sid** | **str** | Output only. The database SID | [optional] [readonly] 
**sap_system_id** | **str** | Output only. The UUID for a SAP workload | [optional] [readonly] 

## Example

```python
from openapi_client.models.sap_workload_overview import SapWorkloadOverview

# TODO update the JSON string below
json = "{}"
# create an instance of SapWorkloadOverview from a JSON string
sap_workload_overview_instance = SapWorkloadOverview.from_json(json)
# print the JSON string representation of the object
print(SapWorkloadOverview.to_json())

# convert the object into a dict
sap_workload_overview_dict = sap_workload_overview_instance.to_dict()
# create an instance of SapWorkloadOverview from a dict
sap_workload_overview_from_dict = SapWorkloadOverview.from_dict(sap_workload_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


