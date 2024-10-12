# ClearAlertRequest

The request for clearing the alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | **List[str]** | The list of alert IDs to be cleared | 
**resolution_message** | **str** | The resolution message while clearing the alert | [optional] 

## Example

```python
from openapi_client.models.clear_alert_request import ClearAlertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClearAlertRequest from a JSON string
clear_alert_request_instance = ClearAlertRequest.from_json(json)
# print the JSON string representation of the object
print(ClearAlertRequest.to_json())

# convert the object into a dict
clear_alert_request_dict = clear_alert_request_instance.to_dict()
# create an instance of ClearAlertRequest from a dict
clear_alert_request_from_dict = ClearAlertRequest.from_dict(clear_alert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


