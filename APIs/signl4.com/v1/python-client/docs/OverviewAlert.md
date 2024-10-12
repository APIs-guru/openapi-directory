# OverviewAlert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_delivery_status** | [**AlertDeliveryStatusInfo**](AlertDeliveryStatusInfo.md) |  | [optional] 
**annotations** | [**List[AlertAnnotationInfo]**](AlertAnnotationInfo.md) |  | [optional] 
**category_id** | **str** |  | [optional] 
**event_id** | **str** |  | [optional] 
**flags** | **int** |  | [optional] 
**history_detailed** | [**AlertHistoryInfoDetailed**](AlertHistoryInfoDetailed.md) |  | [optional] 
**id** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**required_acknowledgements** | **int** |  | [optional] 
**status** | [**AlertStatusCodes**](AlertStatusCodes.md) |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.overview_alert import OverviewAlert

# TODO update the JSON string below
json = "{}"
# create an instance of OverviewAlert from a JSON string
overview_alert_instance = OverviewAlert.from_json(json)
# print the JSON string representation of the object
print(OverviewAlert.to_json())

# convert the object into a dict
overview_alert_dict = overview_alert_instance.to_dict()
# create an instance of OverviewAlert from a dict
overview_alert_from_dict = OverviewAlert.from_dict(overview_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


