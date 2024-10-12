# AdGroup

A container for the details of an existing ad group.<br /><br />An ad group can be added to a campaign that uses the Cost Per Click (CPC) funding model. A campaign may have multiple ad groups. All listings that are promoted in the campaign are included in the ad group.<br /><br /><span class=\"tablenote\"><b>Note:</b> This type only applies to the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. | [optional] 
**ad_group_status** | **str** | An enumeration value representing the current status of the ad group.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;ACTIVE&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PAUSED&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;ARCHIVED&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**default_bid** | [**Amount**](Amount.md) |  | [optional] 
**name** | **str** | The seller-defined name of the ad group. | [optional] 

## Example

```python
from openapi_client.models.ad_group import AdGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AdGroup from a JSON string
ad_group_instance = AdGroup.from_json(json)
# print the JSON string representation of the object
print(AdGroup.to_json())

# convert the object into a dict
ad_group_dict = ad_group_instance.to_dict()
# create an instance of AdGroup from a dict
ad_group_from_dict = AdGroup.from_dict(ad_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


