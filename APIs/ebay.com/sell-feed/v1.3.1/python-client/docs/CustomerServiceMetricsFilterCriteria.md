# CustomerServiceMetricsFilterCriteria

A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_service_metric_type** | **str** | An enumeration value that specifies the customer service metric that eBay tracks to measure seller performance. See &lt;strong&gt;CustomerServiceMetricTypeEnum&lt;/strong&gt; for values. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:CustomerServiceMetricTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**evaluation_marketplace_id** | **str** | An enumeration value that specifies the eBay marketplace where the evaluation occurs. See &lt;strong&gt;MarketplaceIdEnum&lt;/strong&gt; for values. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/bas:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**listing_categories** | **List[str]** | A list of listing category IDs on which the service metric is measured. A seller can use one or more L1 (top-level) eBay categories to get metrics specific to those L1 categories. The Category IDs for each L1 category are required. Category ID values for L1 categories can be retrieved using the Taxonomy API.&lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note: &lt;/strong&gt;Pass this attribute to narrow down your filter results for the &lt;code&gt;ITEM_NOT_AS_DESCRIBED&lt;/code&gt; customerServiceMetricType.&lt;/span&gt;&lt;/p&gt; &lt;p&gt;Supported categories include:&lt;/p&gt;&lt;p&gt;&lt;code&gt;primary(L1) category Id&lt;/code&gt;&lt;/p&gt; | [optional] 
**shipping_regions** | **List[str]** | A list of shipping region enumeration values on which the service metric is measured. This comma delimited array allows the seller to customize the report to focus on domestic or international shipping. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note: &lt;/strong&gt;Pass this attribute to narrow down your filter results for the &lt;code&gt;ITEM_NOT_RECEIVED&lt;/code&gt; customerServiceMetricType.&lt;/span&gt;&lt;/p&gt; &lt;p&gt;Supported categories include:&lt;/p&gt;&lt;p&gt;&lt;code&gt;primary(L1) category Id&lt;/code&gt;&lt;/p&gt;See &lt;strong&gt;ShippingRegionTypeEnum&lt;/strong&gt; for values | [optional] 

## Example

```python
from openapi_client.models.customer_service_metrics_filter_criteria import CustomerServiceMetricsFilterCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerServiceMetricsFilterCriteria from a JSON string
customer_service_metrics_filter_criteria_instance = CustomerServiceMetricsFilterCriteria.from_json(json)
# print the JSON string representation of the object
print(CustomerServiceMetricsFilterCriteria.to_json())

# convert the object into a dict
customer_service_metrics_filter_criteria_dict = customer_service_metrics_filter_criteria_instance.to_dict()
# create an instance of CustomerServiceMetricsFilterCriteria from a dict
customer_service_metrics_filter_criteria_from_dict = CustomerServiceMetricsFilterCriteria.from_dict(customer_service_metrics_filter_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


