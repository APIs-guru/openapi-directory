# HtmlValues

List of html values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The maximum allowable length for html values is 2048 characters. | [optional] 

## Example

```python
from openapi_client.models.html_values import HtmlValues

# TODO update the JSON string below
json = "{}"
# create an instance of HtmlValues from a JSON string
html_values_instance = HtmlValues.from_json(json)
# print the JSON string representation of the object
print(HtmlValues.to_json())

# convert the object into a dict
html_values_dict = html_values_instance.to_dict()
# create an instance of HtmlValues from a dict
html_values_from_dict = HtmlValues.from_dict(html_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


