# RaiseAlertInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[AlertAttachment]**](AlertAttachment.md) |  | [optional] 
**category** | **str** |  | [optional] 
**external_id** | **str** |  | [optional] 
**flags** | **int** |  | [optional] 
**parameters** | [**List[EventParameterInfo]**](EventParameterInfo.md) |  | [optional] 
**severity** | [**AlertSeverities**](AlertSeverities.md) |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.raise_alert_info import RaiseAlertInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RaiseAlertInfo from a JSON string
raise_alert_info_instance = RaiseAlertInfo.from_json(json)
# print the JSON string representation of the object
print(RaiseAlertInfo.to_json())

# convert the object into a dict
raise_alert_info_dict = raise_alert_info_instance.to_dict()
# create an instance of RaiseAlertInfo from a dict
raise_alert_info_from_dict = RaiseAlertInfo.from_dict(raise_alert_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


