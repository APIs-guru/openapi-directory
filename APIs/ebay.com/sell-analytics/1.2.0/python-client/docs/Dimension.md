# Dimension

The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_key** | **str** | dimensionKey defines the basis against which the seller&#39;s customer service metric is measured. The value of this field gets set according to the value of the customer_service_metric_type input parameter. The following input configurations return the responses shown: ITEM_NOT_AS_DESCRIBED &amp;ndash; Returns benchmark ratings based on L1 listing categories, so the result shows metrics where the dimensionKey is set to LISTING_CATEGORY. ITEM_NOT_RECEIVED &amp;ndash; Returns benchmark ratings based on world shipping regions, so the result shows metrics where the dimensionKey is set to SHIPPING_REGION. The shipping region is indicated by the associated value field. For specifics on world shipping regions, see the FAQ section on the following page: Monitor your service metrics For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DimensionTypeEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | The dimension name returned in this field depends on the dimensionKey: If dimensionKey is set to SHIPPING_REGION, this field is set to one of following values, which represent established shipping corridors: Domestic International: Mature region International: Emerging region If dimensionKey is set to LISTING_CATEGORY, this field is set to the name of the primary (L1) category in which the items being rated were listed. | [optional] 
**value** | **str** | The value returned in this field depends on the dimensionKey. If dimensionKey equals LISTING_CATEGORY, the value returned in this field is the category ID of the primary (L1) category in which the items being rated were listed. If dimensionKey equals SHIPPING_REGION, one of the following values is returned: DOMESTIC INTERNATIONAL_MATURED_REGION INTERNATIONAL_EMERGING_REGION | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


