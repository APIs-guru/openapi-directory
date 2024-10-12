# EmailRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**EmailEntityRelation**](EmailEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.email_relation import EmailRelation

# TODO update the JSON string below
json = "{}"
# create an instance of EmailRelation from a JSON string
email_relation_instance = EmailRelation.from_json(json)
# print the JSON string representation of the object
print(EmailRelation.to_json())

# convert the object into a dict
email_relation_dict = email_relation_instance.to_dict()
# create an instance of EmailRelation from a dict
email_relation_from_dict = EmailRelation.from_dict(email_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


