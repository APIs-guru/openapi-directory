# ExtendedProducerResponsibility

A type that defines the attributes of an Extended Producer Responsibility policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_for_variations** | **bool** | An indication of whether the attribute can be enabled for listing variations.&lt;br /&gt;&lt;br /&gt;If the value is &lt;code&gt;true&lt;/code&gt;, the attribute may be specified at the variation level. | [optional] 
**name** | **str** | The name of the attribute included in the policy. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/metadata/types/sel:ExtendedProducerResponsibilityEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**usage** | **str** | The usage guidelines for the attribute, in the specified marketplace. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/metadata/types/sel:GenericUsageEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.extended_producer_responsibility import ExtendedProducerResponsibility

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedProducerResponsibility from a JSON string
extended_producer_responsibility_instance = ExtendedProducerResponsibility.from_json(json)
# print the JSON string representation of the object
print(ExtendedProducerResponsibility.to_json())

# convert the object into a dict
extended_producer_responsibility_dict = extended_producer_responsibility_instance.to_dict()
# create an instance of ExtendedProducerResponsibility from a dict
extended_producer_responsibility_from_dict = ExtendedProducerResponsibility.from_dict(extended_producer_responsibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


