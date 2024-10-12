# RevisionTemplate

RevisionTemplateSpec describes the data a revision should have when created from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ObjectMeta**](ObjectMeta.md) |  | [optional] 
**spec** | [**RevisionSpec**](RevisionSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.revision_template import RevisionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of RevisionTemplate from a JSON string
revision_template_instance = RevisionTemplate.from_json(json)
# print the JSON string representation of the object
print(RevisionTemplate.to_json())

# convert the object into a dict
revision_template_dict = revision_template_instance.to_dict()
# create an instance of RevisionTemplate from a dict
revision_template_from_dict = RevisionTemplate.from_dict(revision_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


