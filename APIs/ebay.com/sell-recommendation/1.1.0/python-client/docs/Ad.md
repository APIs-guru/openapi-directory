# Ad

A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_percentages** | [**List[BidPercentages]**](BidPercentages.md) | This field returns information that you can use to configure the bidPercentage field in a Promoted Listings campaign. Note: Currently, ITEM and TRENDING are the only supported bid percentage types. The ITEM suggested bid percentages are tailored to each of your items and are designed to help you stay competitive while finding an optimal balance between performance and cost. The recommendations are calculated based on a variety of factors that may include item attributes, seasonality, past performance, and current competition for each of your listings. The TRENDING suggested bid percentages are calculated by reviewing the category level average ad rates in the marketplace. Setting the bidPercentage of your ad campaign based on these rate recommendations will help the items in the campaign be competitive with other items in the marketplace by improving their chances of being displayed more often in the marketplace. | [optional] 
**promote_with_ad** | **str** | An enum whose values describe whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. IDs deemed RECOMMENDED by eBay are the listings with the highest potential of benefiting from being promoted. The recommendation calculation is based on marketplace trends, like buyer demand and the competition in the item&amp;rsquo;s category. Note: A promoteWithAd value cannot be calculated for listings that are part of Promoted Listings campaigns. Because of this, if you call findListingRecommendations with a specific set of listing IDs, the promoteWithAd field is not returned for any of the listings that are involved in a promotion. However, as long as they are eligible, the trending bidPercentage is returned for all specified listings, even if they are part of an ad campaign. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/recommendation/types/api:PromoteWithAd&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.ad import Ad

# TODO update the JSON string below
json = "{}"
# create an instance of Ad from a JSON string
ad_instance = Ad.from_json(json)
# print the JSON string representation of the object
print(Ad.to_json())

# convert the object into a dict
ad_dict = ad_instance.to_dict()
# create an instance of Ad from a dict
ad_from_dict = Ad.from_dict(ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


