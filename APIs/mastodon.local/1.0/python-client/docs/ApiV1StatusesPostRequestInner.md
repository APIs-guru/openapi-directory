# ApiV1StatusesPostRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_reply_to_id** | **str** | ID of the status being replied to, if status is a reply | [optional] 
**language** | **str** | ISO 639 language code for this status. | [optional] 
**media_ids** | **List[str]** | Array of Attachment ids to be attached as media. If provided, &#x60;status&#x60; becomes optional, and &#x60;poll&#x60; cannot be used. | [optional] 
**poll** | **Dict[object]** |  | [optional] 
**scheduled_at** | **str** | ISO 8601 Datetime at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future. | [optional] 
**sensitive** | **bool** | Mark status and attached media as sensitive? | [optional] 
**spoiler_text** | **str** | Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field. | [optional] 
**status** | **str** | Text content of the status. If &#x60;media_ids&#x60; is provided, this becomes optional. Attaching a &#x60;poll&#x60; is optional while &#x60;status&#x60; is provided. | [optional] 
**visibility** | **str** | Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct. | [optional] 

## Example

```python
from openapi_client.models.api_v1_statuses_post_request_inner import ApiV1StatusesPostRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1StatusesPostRequestInner from a JSON string
api_v1_statuses_post_request_inner_instance = ApiV1StatusesPostRequestInner.from_json(json)
# print the JSON string representation of the object
print(ApiV1StatusesPostRequestInner.to_json())

# convert the object into a dict
api_v1_statuses_post_request_inner_dict = api_v1_statuses_post_request_inner_instance.to_dict()
# create an instance of ApiV1StatusesPostRequestInner from a dict
api_v1_statuses_post_request_inner_from_dict = ApiV1StatusesPostRequestInner.from_dict(api_v1_statuses_post_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


