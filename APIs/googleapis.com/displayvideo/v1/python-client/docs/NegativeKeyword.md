# NegativeKeyword

A negatively targeted keyword that belongs to a negative keyword list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword_value** | **str** | Required. Immutable. The negatively targeted keyword, for example &#x60;car insurance&#x60;. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. Valid characters are restricted to ASCII characters only. The only URL-escaping permitted is for representing whitespace between words. Leading or trailing whitespace is ignored. | [optional] 
**name** | **str** | Output only. The resource name of the negative keyword. | [optional] [readonly] 

## Example

```python
from openapi_client.models.negative_keyword import NegativeKeyword

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeKeyword from a JSON string
negative_keyword_instance = NegativeKeyword.from_json(json)
# print the JSON string representation of the object
print(NegativeKeyword.to_json())

# convert the object into a dict
negative_keyword_dict = negative_keyword_instance.to_dict()
# create an instance of NegativeKeyword from a dict
negative_keyword_from_dict = NegativeKeyword.from_dict(negative_keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


