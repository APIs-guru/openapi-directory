# GenericInsight

A generic insight about an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_information** | **List[str]** | Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links. | [optional] [readonly] 
**default_message** | **str** | Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. | [optional] [readonly] 
**message_id** | **str** | Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead. | [optional] [readonly] 

## Example

```python
from openapi_client.models.generic_insight import GenericInsight

# TODO update the JSON string below
json = "{}"
# create an instance of GenericInsight from a JSON string
generic_insight_instance = GenericInsight.from_json(json)
# print the JSON string representation of the object
print(GenericInsight.to_json())

# convert the object into a dict
generic_insight_dict = generic_insight_instance.to_dict()
# create an instance of GenericInsight from a dict
generic_insight_from_dict = GenericInsight.from_dict(generic_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


