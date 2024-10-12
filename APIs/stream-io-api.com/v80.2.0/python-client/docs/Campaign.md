# Campaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | 
**channel_type** | **str** |  | 
**completed_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | 
**defaults** | **Dict[str, str]** |  | 
**description** | **str** |  | 
**details** | **str** |  | [optional] 
**errored_messages** | **int** |  | [optional] 
**failed_at** | **datetime** |  | [optional] 
**id** | **str** |  | 
**name** | **str** |  | 
**resumed_at** | **datetime** |  | [optional] 
**scheduled_at** | **datetime** |  | [optional] 
**scheduled_for** | **datetime** |  | [optional] 
**segment_id** | **str** |  | 
**sender_id** | **str** |  | 
**sent_messages** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**stopped_at** | **datetime** |  | [optional] 
**task_id** | **str** |  | [optional] 
**text** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.campaign import Campaign

# TODO update the JSON string below
json = "{}"
# create an instance of Campaign from a JSON string
campaign_instance = Campaign.from_json(json)
# print the JSON string representation of the object
print(Campaign.to_json())

# convert the object into a dict
campaign_dict = campaign_instance.to_dict()
# create an instance of Campaign from a dict
campaign_from_dict = Campaign.from_dict(campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


