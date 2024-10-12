# WebhookV2EventDataResourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessed_at** | **datetime** | Date and time resource was most recently downloaded | [optional] 
**created_at** | **datetime** | Date and time of resource creation | [optional] 
**created_by** | **str** | Username who originally created resource | [optional] 
**file_count** | **int** | Number of resources contained in this folder. If this is a file, fileCount is null | [optional] 
**hash** | **str** | Resource hash value | [optional] 
**id** | **int** | Resource ID | [optional] 
**name** | **str** | Resource name | [optional] 
**path** | **str** | Full path to resource | [optional] 
**previewable** | **bool** | Whether the resource can be previewed | [optional] 
**size** | **int** | Size of resource in bytes | [optional] 
**type** | **str** | Type of resource &#x60;file&#x60; or &#x60;dir&#x60; | [optional] 
**updated_at** | **datetime** | Date and time resource was most recently changed | [optional] 
**upload_date** | **datetime** | Date resource was first uploaded | [optional] 

## Example

```python
from openapi_client.models.webhook_v2_event_data_resources_inner import WebhookV2EventDataResourcesInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookV2EventDataResourcesInner from a JSON string
webhook_v2_event_data_resources_inner_instance = WebhookV2EventDataResourcesInner.from_json(json)
# print the JSON string representation of the object
print(WebhookV2EventDataResourcesInner.to_json())

# convert the object into a dict
webhook_v2_event_data_resources_inner_dict = webhook_v2_event_data_resources_inner_instance.to_dict()
# create an instance of WebhookV2EventDataResourcesInner from a dict
webhook_v2_event_data_resources_inner_from_dict = WebhookV2EventDataResourcesInner.from_dict(webhook_v2_event_data_resources_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


