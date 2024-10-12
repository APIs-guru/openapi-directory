# Option

An option for a Choice question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**go_to_action** | **str** | Section navigation type. | [optional] 
**go_to_section_id** | **str** | Item ID of section header to go to. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**is_other** | **bool** | Whether the option is \&quot;other\&quot;. Currently only applies to &#x60;RADIO&#x60; and &#x60;CHECKBOX&#x60; choice types, but is not allowed in a QuestionGroupItem. | [optional] 
**value** | **str** | Required. The choice as presented to the user. | [optional] 

## Example

```python
from openapi_client.models.option import Option

# TODO update the JSON string below
json = "{}"
# create an instance of Option from a JSON string
option_instance = Option.from_json(json)
# print the JSON string representation of the object
print(Option.to_json())

# convert the object into a dict
option_dict = option_instance.to_dict()
# create an instance of Option from a dict
option_from_dict = Option.from_dict(option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


