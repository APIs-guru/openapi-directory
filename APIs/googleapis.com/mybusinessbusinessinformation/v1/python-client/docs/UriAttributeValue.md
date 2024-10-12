# UriAttributeValue

Values for an attribute with a `value_type` of URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The proposed URI value for this attribute. | [optional] 

## Example

```python
from openapi_client.models.uri_attribute_value import UriAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of UriAttributeValue from a JSON string
uri_attribute_value_instance = UriAttributeValue.from_json(json)
# print the JSON string representation of the object
print(UriAttributeValue.to_json())

# convert the object into a dict
uri_attribute_value_dict = uri_attribute_value_instance.to_dict()
# create an instance of UriAttributeValue from a dict
uri_attribute_value_from_dict = UriAttributeValue.from_dict(uri_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


