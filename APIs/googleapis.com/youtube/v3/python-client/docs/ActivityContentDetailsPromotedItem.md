# ActivityContentDetailsPromotedItem

Details about a resource which is being promoted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_tag** | **str** | The URL the client should fetch to request a promoted item. | [optional] 
**click_tracking_url** | **str** | The URL the client should ping to indicate that the user clicked through on this promoted item. | [optional] 
**creative_view_url** | **str** | The URL the client should ping to indicate that the user was shown this promoted item. | [optional] 
**cta_type** | **str** | The type of call-to-action, a message to the user indicating action that can be taken. | [optional] 
**custom_cta_button_text** | **str** | The custom call-to-action button text. If specified, it will override the default button text for the cta_type. | [optional] 
**description_text** | **str** | The text description to accompany the promoted item. | [optional] 
**destination_url** | **str** | The URL the client should direct the user to, if the user chooses to visit the advertiser&#39;s website. | [optional] 
**forecasting_url** | **List[str]** | The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown. | [optional] 
**impression_url** | **List[str]** | The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item. | [optional] 
**video_id** | **str** | The ID that YouTube uses to uniquely identify the promoted video. | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_promoted_item import ActivityContentDetailsPromotedItem

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsPromotedItem from a JSON string
activity_content_details_promoted_item_instance = ActivityContentDetailsPromotedItem.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsPromotedItem.to_json())

# convert the object into a dict
activity_content_details_promoted_item_dict = activity_content_details_promoted_item_instance.to_dict()
# create an instance of ActivityContentDetailsPromotedItem from a dict
activity_content_details_promoted_item_from_dict = ActivityContentDetailsPromotedItem.from_dict(activity_content_details_promoted_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


