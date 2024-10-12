# Tag

A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finger_print** | **str** | The fingerprint of the tag. Required for updating the list of tags. | [optional] 
**items** | **List[str]** | Items contained in this tag. | [optional] 

## Example

```python
from openapi_client.models.tag import Tag

# TODO update the JSON string below
json = "{}"
# create an instance of Tag from a JSON string
tag_instance = Tag.from_json(json)
# print the JSON string representation of the object
print(Tag.to_json())

# convert the object into a dict
tag_dict = tag_instance.to_dict()
# create an instance of Tag from a dict
tag_from_dict = Tag.from_dict(tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


