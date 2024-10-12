# AdResponse

This type defines the fields returned in an ad response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; This field will always be returned for  campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.&lt;/span&gt; | [optional] 
**ad_id** | **str** | A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;This field is only returned when an ad is successfully created for the corresponding listing.&lt;/span&gt; | [optional] 
**errors** | [**List[Error]**](Error.md) | An array of errors associated with the request. | [optional] 
**href** | **str** | The getAd URI that points to the ad.&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;This field is only returned when an ad is successfully created for the corresponding listing.&lt;/span&gt; | [optional] 
**listing_id** | **str** | A unique eBay-assigned ID for a listing that is generated when the listing is created. | [optional] 
**status_code** | **int** | An HTTP status code indicating if the corresponding ad was successfully created or not. &lt;code&gt;200 Successful&lt;/code&gt; should be returned for successfully created ads.&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;A status code is returned for each ad that the seller creates, or attempts to create.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.ad_response import AdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdResponse from a JSON string
ad_response_instance = AdResponse.from_json(json)
# print the JSON string representation of the object
print(AdResponse.to_json())

# convert the object into a dict
ad_response_dict = ad_response_instance.to_dict()
# create an instance of AdResponse from a dict
ad_response_from_dict = AdResponse.from_dict(ad_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


