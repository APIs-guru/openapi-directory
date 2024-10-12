# ContactRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**ContactEntityRelation**](ContactEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.contact_relation import ContactRelation

# TODO update the JSON string below
json = "{}"
# create an instance of ContactRelation from a JSON string
contact_relation_instance = ContactRelation.from_json(json)
# print the JSON string representation of the object
print(ContactRelation.to_json())

# convert the object into a dict
contact_relation_dict = contact_relation_instance.to_dict()
# create an instance of ContactRelation from a dict
contact_relation_from_dict = ContactRelation.from_dict(contact_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


