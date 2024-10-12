# AdClient

Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the ad client. Format: accounts/{account}/adclients/{adclient} | [optional] [readonly] 
**product_code** | **str** | Output only. Reporting product code of the ad client. For example, \&quot;AFC\&quot; for AdSense for Content. Corresponds to the &#x60;PRODUCT_CODE&#x60; dimension, and present only if the ad client supports reporting. | [optional] [readonly] 
**reporting_dimension_id** | **str** | Output only. Unique ID of the ad client as used in the &#x60;AD_CLIENT_ID&#x60; reporting dimension. Present only if the ad client supports reporting. | [optional] [readonly] 
**state** | **str** | Output only. State of the ad client. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ad_client import AdClient

# TODO update the JSON string below
json = "{}"
# create an instance of AdClient from a JSON string
ad_client_instance = AdClient.from_json(json)
# print the JSON string representation of the object
print(AdClient.to_json())

# convert the object into a dict
ad_client_dict = ad_client_instance.to_dict()
# create an instance of AdClient from a dict
ad_client_from_dict = AdClient.from_dict(ad_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


