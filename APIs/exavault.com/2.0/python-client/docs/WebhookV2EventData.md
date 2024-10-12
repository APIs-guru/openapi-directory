# WebhookV2EventData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_details** | **List[object]** |  | [optional] 
**resources** | [**List[WebhookV2EventDataResourcesInner]**](WebhookV2EventDataResourcesInner.md) |  | [optional] 
**share** | [**List[WebhookV2EventDataShareInner]**](WebhookV2EventDataShareInner.md) |  | [optional] 
**transfer_status** | **str** | For uploads, and downloads, whether the file transferred OK. &#x60;success&#x60; means the transfer did not have errors | [optional] 

## Example

```python
from openapi_client.models.webhook_v2_event_data import WebhookV2EventData

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookV2EventData from a JSON string
webhook_v2_event_data_instance = WebhookV2EventData.from_json(json)
# print the JSON string representation of the object
print(WebhookV2EventData.to_json())

# convert the object into a dict
webhook_v2_event_data_dict = webhook_v2_event_data_instance.to_dict()
# create an instance of WebhookV2EventData from a dict
webhook_v2_event_data_from_dict = WebhookV2EventData.from_dict(webhook_v2_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


