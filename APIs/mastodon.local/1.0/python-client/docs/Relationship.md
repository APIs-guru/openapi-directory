# Relationship

Represents the relationship between accounts, such as following / blocking / muting / etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_by** | **bool** | Is this user blocking you? | 
**blocking** | **bool** | Are you blocking this user? | 
**domain_blocking** | **bool** | Are you blocking this user&#39;s domain? | 
**endorsed** | **bool** | Are you featuring this user on your profile? | 
**followed_by** | **bool** | Are you followed by this user? | 
**following** | **bool** | Are you following this user? | 
**id** | **str** | The account id. Cast from an integer, but not guaranteed to be a number. | 
**muting** | **bool** | Are you muting this user? | 
**muting_notifications** | **bool** | Are you muting notifications from this user? | 
**note** | **str** | This user&#39;s profile bio | 
**notifying** | **bool** | Have you enabled notifications for this user? | 
**requested** | **bool** | Do you have a pending follow request for this user? | 
**showing_reblogs** | **bool** | Are you receiving this user&#39;s boosts in your home timeline? | 

## Example

```python
from openapi_client.models.relationship import Relationship

# TODO update the JSON string below
json = "{}"
# create an instance of Relationship from a JSON string
relationship_instance = Relationship.from_json(json)
# print the JSON string representation of the object
print(Relationship.to_json())

# convert the object into a dict
relationship_dict = relationship_instance.to_dict()
# create an instance of Relationship from a dict
relationship_from_dict = Relationship.from_dict(relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


