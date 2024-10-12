# AlertInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[AlertAnnotationInfo]**](AlertAnnotationInfo.md) |  | [optional] 
**attachments** | [**List[AlertAttachment]**](AlertAttachment.md) |  | [optional] 
**category** | **str** |  | [optional] 
**category_id** | **str** |  | [optional] 
**event_id** | **str** |  | [optional] 
**event_source_id** | **str** |  | [optional] 
**event_source_type** | [**EventSourceTypes**](EventSourceTypes.md) |  | [optional] 
**flags** | **int** |  | [optional] 
**history** | [**AlertHistoryInfoDetailed**](AlertHistoryInfoDetailed.md) |  | [optional] 
**id** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**parameters** | [**List[EventParameterInfo]**](EventParameterInfo.md) |  | [optional] 
**severity** | [**AlertSeverities**](AlertSeverities.md) |  | [optional] 
**status** | [**AlertStatusCodes**](AlertStatusCodes.md) |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_info import AlertInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AlertInfo from a JSON string
alert_info_instance = AlertInfo.from_json(json)
# print the JSON string representation of the object
print(AlertInfo.to_json())

# convert the object into a dict
alert_info_dict = alert_info_instance.to_dict()
# create an instance of AlertInfo from a dict
alert_info_from_dict = AlertInfo.from_dict(alert_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


