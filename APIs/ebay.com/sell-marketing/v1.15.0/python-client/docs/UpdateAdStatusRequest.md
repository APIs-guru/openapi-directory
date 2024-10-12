# UpdateAdStatusRequest

A type that contains the fields for the <b>UpdateAdStatus</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | A unique eBay-assigned ID that is generated when the ad is created. | [optional] 
**ad_status** | **str** | An enumeration value representing the current status of the ad.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;ACTIVE&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PAUSED&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;ARCHIVED&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.update_ad_status_request import UpdateAdStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAdStatusRequest from a JSON string
update_ad_status_request_instance = UpdateAdStatusRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAdStatusRequest.to_json())

# convert the object into a dict
update_ad_status_request_dict = update_ad_status_request_instance.to_dict()
# create an instance of UpdateAdStatusRequest from a dict
update_ad_status_request_from_dict = UpdateAdStatusRequest.from_dict(update_ad_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


