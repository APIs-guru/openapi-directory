# SubscriptionContentDetails

Details about the content to witch a subscription refers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_type** | **str** | The type of activity this subscription is for (only uploads, everything). | [optional] 
**new_item_count** | **int** | The number of new items in the subscription since its content was last read. | [optional] 
**total_item_count** | **int** | The approximate number of items that the subscription points to. | [optional] 

## Example

```python
from openapi_client.models.subscription_content_details import SubscriptionContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionContentDetails from a JSON string
subscription_content_details_instance = SubscriptionContentDetails.from_json(json)
# print the JSON string representation of the object
print(SubscriptionContentDetails.to_json())

# convert the object into a dict
subscription_content_details_dict = subscription_content_details_instance.to_dict()
# create an instance of SubscriptionContentDetails from a dict
subscription_content_details_from_dict = SubscriptionContentDetails.from_dict(subscription_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


