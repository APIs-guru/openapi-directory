# WebLabel

Label to provide extra metadata for the web detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label for extra metadata. | [optional] 
**language_code** | **str** | The BCP-47 language code for &#x60;label&#x60;, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 

## Example

```python
from openapi_client.models.web_label import WebLabel

# TODO update the JSON string below
json = "{}"
# create an instance of WebLabel from a JSON string
web_label_instance = WebLabel.from_json(json)
# print the JSON string representation of the object
print(WebLabel.to_json())

# convert the object into a dict
web_label_dict = web_label_instance.to_dict()
# create an instance of WebLabel from a dict
web_label_from_dict = WebLabel.from_dict(web_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


