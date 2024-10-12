# Entitlement

A single entitlement for a publication reader

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit. | [optional] 
**expire_time** | **str** | Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. Required. LINT.IfChange(expire_time) The max expire_time is 398 days from now(). LINT.ThenChange(//depot/google3/java/com/google/subscribewithgoogle/accountlinking/subscriptionlink/service/config/protoconf.pi:max_expiry_age) | [optional] 
**product_id** | **str** | Required. The publication&#39;s product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. \&quot;dailybugle.com:basic\&quot; | [optional] 
**subscription_token** | **str** | A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google. | [optional] 

## Example

```python
from openapi_client.models.entitlement import Entitlement

# TODO update the JSON string below
json = "{}"
# create an instance of Entitlement from a JSON string
entitlement_instance = Entitlement.from_json(json)
# print the JSON string representation of the object
print(Entitlement.to_json())

# convert the object into a dict
entitlement_dict = entitlement_instance.to_dict()
# create an instance of Entitlement from a dict
entitlement_from_dict = Entitlement.from_dict(entitlement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


