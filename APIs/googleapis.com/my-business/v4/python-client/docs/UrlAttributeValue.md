# UrlAttributeValue

Values for an attribute with a `value_type` of URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL. | [optional] 

## Example

```python
from openapi_client.models.url_attribute_value import UrlAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of UrlAttributeValue from a JSON string
url_attribute_value_instance = UrlAttributeValue.from_json(json)
# print the JSON string representation of the object
print(UrlAttributeValue.to_json())

# convert the object into a dict
url_attribute_value_dict = url_attribute_value_instance.to_dict()
# create an instance of UrlAttributeValue from a dict
url_attribute_value_from_dict = UrlAttributeValue.from_dict(url_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


