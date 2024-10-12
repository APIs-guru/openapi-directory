# SellerActionsToRelease

This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_action_to_release** | **str** | A possible action that the seller can take to expedite the release of a payment hold. A &lt;strong&gt;sellerActionToRelease&lt;/strong&gt; field is returned for each possible action that a seller may take. Possible actions may include providing shipping/tracking information, issuing a refund, providing refund information, contacting customer support, etc. | [optional] 

## Example

```python
from openapi_client.models.seller_actions_to_release import SellerActionsToRelease

# TODO update the JSON string below
json = "{}"
# create an instance of SellerActionsToRelease from a JSON string
seller_actions_to_release_instance = SellerActionsToRelease.from_json(json)
# print the JSON string representation of the object
print(SellerActionsToRelease.to_json())

# convert the object into a dict
seller_actions_to_release_dict = seller_actions_to_release_instance.to_dict()
# create an instance of SellerActionsToRelease from a dict
seller_actions_to_release_from_dict = SellerActionsToRelease.from_dict(seller_actions_to_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


