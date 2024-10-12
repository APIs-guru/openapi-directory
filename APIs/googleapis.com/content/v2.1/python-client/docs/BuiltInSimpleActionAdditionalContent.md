# BuiltInSimpleActionAdditionalContent

Long text from external source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paragraphs** | **List[str]** | Long text organized into paragraphs. | [optional] 
**title** | **str** | Title of the additional content; | [optional] 

## Example

```python
from openapi_client.models.built_in_simple_action_additional_content import BuiltInSimpleActionAdditionalContent

# TODO update the JSON string below
json = "{}"
# create an instance of BuiltInSimpleActionAdditionalContent from a JSON string
built_in_simple_action_additional_content_instance = BuiltInSimpleActionAdditionalContent.from_json(json)
# print the JSON string representation of the object
print(BuiltInSimpleActionAdditionalContent.to_json())

# convert the object into a dict
built_in_simple_action_additional_content_dict = built_in_simple_action_additional_content_instance.to_dict()
# create an instance of BuiltInSimpleActionAdditionalContent from a dict
built_in_simple_action_additional_content_from_dict = BuiltInSimpleActionAdditionalContent.from_dict(built_in_simple_action_additional_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


