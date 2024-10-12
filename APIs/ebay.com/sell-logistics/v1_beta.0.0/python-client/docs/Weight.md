# Weight

This complex type contains information about the weight of an object such as a shipping package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit of measurement used to specify the weight of a shipping package. Both the &lt;strong&gt;unit&lt;/strong&gt; and &lt;strong&gt;value&lt;/strong&gt; fields are required if the &lt;strong&gt;weight&lt;/strong&gt; container is used. If the English system of measurement is being used, the applicable values for weight units are &lt;code&gt;POUND&lt;/code&gt; and &lt;code&gt;OUNCE&lt;/CODE&gt;. If the metric system of measurement is being used, the applicable values for weight units are &lt;code&gt;KILOGRAM&lt;/code&gt; and &lt;code&gt;GRAM&lt;/code&gt;. The metric system is used by most countries outside of the US. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The numeric value of the weight of the package, as measured by the value of &lt;b&gt;unit&lt;/b&gt;. | [optional] 

## Example

```python
from openapi_client.models.weight import Weight

# TODO update the JSON string below
json = "{}"
# create an instance of Weight from a JSON string
weight_instance = Weight.from_json(json)
# print the JSON string representation of the object
print(Weight.to_json())

# convert the object into a dict
weight_dict = weight_instance.to_dict()
# create an instance of Weight from a dict
weight_from_dict = Weight.from_dict(weight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


