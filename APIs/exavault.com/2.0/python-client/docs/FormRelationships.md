# FormRelationships

Share relationship data of the form. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**share** | [**FormRelationshipsShare**](FormRelationshipsShare.md) |  | [optional] 

## Example

```python
from openapi_client.models.form_relationships import FormRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of FormRelationships from a JSON string
form_relationships_instance = FormRelationships.from_json(json)
# print the JSON string representation of the object
print(FormRelationships.to_json())

# convert the object into a dict
form_relationships_dict = form_relationships_instance.to_dict()
# create an instance of FormRelationships from a dict
form_relationships_from_dict = FormRelationships.from_dict(form_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


