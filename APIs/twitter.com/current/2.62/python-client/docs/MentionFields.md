# MentionFields

Represent the portion of text recognized as a User mention, and its start and end position within the text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**username** | **str** | The Twitter handle (screen name) of this user. | 

## Example

```python
from openapi_client.models.mention_fields import MentionFields

# TODO update the JSON string below
json = "{}"
# create an instance of MentionFields from a JSON string
mention_fields_instance = MentionFields.from_json(json)
# print the JSON string representation of the object
print(MentionFields.to_json())

# convert the object into a dict
mention_fields_dict = mention_fields_instance.to_dict()
# create an instance of MentionFields from a dict
mention_fields_from_dict = MentionFields.from_dict(mention_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


