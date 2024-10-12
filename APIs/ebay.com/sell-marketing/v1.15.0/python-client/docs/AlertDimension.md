# AlertDimension

A type that contains the dimension fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key field of the applied dimension. For example, the marketplace Id. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:DimensionKeyEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The value field of the applied dimension. For example, if the key is a &lt;code&gt;MARKETPLACE_ID&lt;/code&gt;, the value would be from &lt;a href&#x3D;&#39;/api-docs/sell/marketing/types/ba:MarketplaceIdEnum&#39;&gt;MarketplaceIdEnum&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.alert_dimension import AlertDimension

# TODO update the JSON string below
json = "{}"
# create an instance of AlertDimension from a JSON string
alert_dimension_instance = AlertDimension.from_json(json)
# print the JSON string representation of the object
print(AlertDimension.to_json())

# convert the object into a dict
alert_dimension_dict = alert_dimension_instance.to_dict()
# create an instance of AlertDimension from a dict
alert_dimension_from_dict = AlertDimension.from_dict(alert_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


