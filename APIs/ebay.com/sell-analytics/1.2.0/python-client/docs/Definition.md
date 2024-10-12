# Definition

A complex type that defines a dimension key and metrics in a traffic report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Indicates the data type of the returned dimension. For example, if the dimension is day, the data type is DATE. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DataTypeEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**key** | **str** | The value the dimension or metric parameter as submitted in the request. | [optional] 
**localized_name** | **str** | The localized name of the metric or dimension (translated into the language specified in the Accept-Language HTTP request header). For example, if Accept-Language is set to de-DE, the value &amp;quot;day&amp;quot; in the dimension container is returned as &amp;quot;tag&amp;quot;, and a metric of TRANSACTION is returned as &amp;quot;Transaktionsanzahl&amp;quot;. | [optional] 

## Example

```python
from openapi_client.models.definition import Definition

# TODO update the JSON string below
json = "{}"
# create an instance of Definition from a JSON string
definition_instance = Definition.from_json(json)
# print the JSON string representation of the object
print(Definition.to_json())

# convert the object into a dict
definition_dict = definition_instance.to_dict()
# create an instance of Definition from a dict
definition_from_dict = Definition.from_dict(definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


