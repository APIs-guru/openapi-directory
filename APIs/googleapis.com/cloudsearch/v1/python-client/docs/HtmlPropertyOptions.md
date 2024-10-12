# HtmlPropertyOptions

The options for html properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_options** | [**HtmlOperatorOptions**](HtmlOperatorOptions.md) |  | [optional] 
**retrieval_importance** | [**RetrievalImportance**](RetrievalImportance.md) |  | [optional] 

## Example

```python
from openapi_client.models.html_property_options import HtmlPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HtmlPropertyOptions from a JSON string
html_property_options_instance = HtmlPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(HtmlPropertyOptions.to_json())

# convert the object into a dict
html_property_options_dict = html_property_options_instance.to_dict()
# create an instance of HtmlPropertyOptions from a dict
html_property_options_from_dict = HtmlPropertyOptions.from_dict(html_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


