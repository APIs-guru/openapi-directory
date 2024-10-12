# Aspect

A type that contains the aspect fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The type of the aspect. For example, &lt;code&gt;MINIMUM_REQUIRED&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AspectKeyEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The value of the aspect. For example, if the aspect is a percentage, a value of &#39;2.0&#39; would equal 2%. | [optional] 

## Example

```python
from openapi_client.models.aspect import Aspect

# TODO update the JSON string below
json = "{}"
# create an instance of Aspect from a JSON string
aspect_instance = Aspect.from_json(json)
# print the JSON string representation of the object
print(Aspect.to_json())

# convert the object into a dict
aspect_dict = aspect_instance.to_dict()
# create an instance of Aspect from a dict
aspect_from_dict = Aspect.from_dict(aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


