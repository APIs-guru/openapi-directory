# EmailHistoryResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | [optional] 
**sender** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_history_resource_relationships import EmailHistoryResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of EmailHistoryResourceRelationships from a JSON string
email_history_resource_relationships_instance = EmailHistoryResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(EmailHistoryResourceRelationships.to_json())

# convert the object into a dict
email_history_resource_relationships_dict = email_history_resource_relationships_instance.to_dict()
# create an instance of EmailHistoryResourceRelationships from a dict
email_history_resource_relationships_from_dict = EmailHistoryResourceRelationships.from_dict(email_history_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


