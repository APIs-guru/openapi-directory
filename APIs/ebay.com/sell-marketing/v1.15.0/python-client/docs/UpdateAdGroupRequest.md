# UpdateAdGroupRequest

A type that contains the fields used by the <b>UpdateAdGroup</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_status** | **str** | An enumeration value representing the current status of the ad group.&lt;p&gt;If the status of the ad is currently &lt;code&gt;ACTIVE&lt;/code&gt;, you can change status to &lt;code&gt;PAUSED&lt;/code&gt; or &lt;code&gt;ARCHIVED&lt;/code&gt;. If ad group is currently in &lt;code&gt;PAUSED&lt;/code&gt; status, you can change the status back to &lt;code&gt;ACTIVE&lt;/code&gt;. Ads that are currently in &lt;code&gt;ARCHIVED&lt;/code&gt; status cannot be made &lt;code&gt;ACTIVE&lt;/code&gt; again.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;ACTIVE&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PAUSED&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;ARCHIVED&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**default_bid** | [**Amount**](Amount.md) |  | [optional] 
**name** | **str** | The updated name for the specified ad group. | [optional] 

## Example

```python
from openapi_client.models.update_ad_group_request import UpdateAdGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAdGroupRequest from a JSON string
update_ad_group_request_instance = UpdateAdGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAdGroupRequest.to_json())

# convert the object into a dict
update_ad_group_request_dict = update_ad_group_request_instance.to_dict()
# create an instance of UpdateAdGroupRequest from a dict
update_ad_group_request_from_dict = UpdateAdGroupRequest.from_dict(update_ad_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


