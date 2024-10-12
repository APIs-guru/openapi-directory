# MiscKeyword

A person's miscellaneous keyword.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_type** | **str** | Output only. The type of the miscellaneous keyword translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The miscellaneous keyword type. | [optional] 
**value** | **str** | The value of the miscellaneous keyword. | [optional] 

## Example

```python
from openapi_client.models.misc_keyword import MiscKeyword

# TODO update the JSON string below
json = "{}"
# create an instance of MiscKeyword from a JSON string
misc_keyword_instance = MiscKeyword.from_json(json)
# print the JSON string representation of the object
print(MiscKeyword.to_json())

# convert the object into a dict
misc_keyword_dict = misc_keyword_instance.to_dict()
# create an instance of MiscKeyword from a dict
misc_keyword_from_dict = MiscKeyword.from_dict(misc_keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


