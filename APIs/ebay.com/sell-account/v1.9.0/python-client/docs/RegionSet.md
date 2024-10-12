# RegionSet

This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_excluded** | [**List[Region]**](Region.md) | An array of one or more &lt;b&gt;regionName&lt;/b&gt; values that specify the areas to where a seller does not ship. A &lt;b&gt;regionExcluded&lt;/b&gt; list should only be set in the top-level &lt;b&gt;shipToLocations&lt;/b&gt; container and not within the &lt;b&gt;shippingServices.shipToLocations&lt;/b&gt; container used to specify which shipping regions are serviced by each available shipping service option. &lt;p&gt;Many sellers are willing to ship to many international locations, but they may want to exclude some world regions or some countries as places they are willing to ship to.&lt;br/&gt;&lt;br/&gt;This array will be returned as empty if no shipping regions are excluded with the fulfillment business policy.&lt;br /&gt; &lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt; The &lt;b&gt;regionExcluded&lt;/b&gt; array is not applicable for motor vehicle business policies on the US, CA, or UK marketplaces. If this array is used in a &lt;b&gt;createFulfillmentPolicy&lt;/b&gt; or &lt;b&gt;updateFulfillmentPolicy&lt;/b&gt; request, it will be ignored.&lt;/span&gt; | [optional] 
**region_included** | [**List[Region]**](Region.md) | An array of one or more &lt;b&gt;regionName&lt;/b&gt; fields that specify the areas to where a seller ships. &lt;br /&gt;Each eBay marketplace supports its own set of allowable shipping locations.&lt;br /&gt; &lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt; The &lt;b&gt;regionIncluded&lt;/b&gt; array is not applicable for motor vehicle business policies on the US, CA, or UK marketplaces. If this array is used in a &lt;b&gt;createFulfillmentPolicy&lt;/b&gt; or &lt;b&gt;updateFulfillmentPolicy&lt;/b&gt; request, it will be ignored.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.region_set import RegionSet

# TODO update the JSON string below
json = "{}"
# create an instance of RegionSet from a JSON string
region_set_instance = RegionSet.from_json(json)
# print the JSON string representation of the object
print(RegionSet.to_json())

# convert the object into a dict
region_set_dict = region_set_instance.to_dict()
# create an instance of RegionSet from a dict
region_set_from_dict = RegionSet.from_dict(region_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


