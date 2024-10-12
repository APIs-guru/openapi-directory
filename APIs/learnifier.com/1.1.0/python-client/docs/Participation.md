# Participation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_link** | **str** | A link to access this particular participation. The link requires the user to login. Users that access the platform the first time must set a password. This value is null if this participation is not activated.  | [optional] 
**activated** | **bool** | True if this participation has been activated and can be used | [optional] 
**activities_completed** | **float** | The number of activities completed | [optional] 
**activities_total** | **float** | The total number of activities | [optional] 
**error_message** | **str** | An optional error message that may describe why the participation is in error state. | [optional] 
**expiration** | **datetime** | The timestamp when this participation will expire. Expiration never happens if this value is *null*. | [optional] 
**external_id** | **str** | The external id (foreign key). Must not exceed 255 characters. | [optional] 
**first_access** | **datetime** | The timestamp when the participant accessed the project for the first time. This value can be null | [optional] 
**first_activation** | **datetime** | The timestamp when this participation was first activated. This value can be null | [optional] 
**first_mail** | **datetime** | The timestamp when the first mail was sent to this participant. This value can be null | [optional] 
**id** | **int** | Unique identifier representing this participation. Id numbers are never reused | [optional] 
**in_error** | **bool** | True if this participation is in an error state. The user is not able to access participations that are in error state. | [optional] 
**last_access** | **datetime** | The timestamp when the participant accessed the project the last time. This value can be null | [optional] 
**last_activation** | **datetime** | The timestamp when this participation was last activated. This value can be null | [optional] 
**last_mail** | **datetime** | The timestamp when the last mail was sent to this participant. This value can be null | [optional] 
**project_id** | **int** | The id of the project this participation belongs to | [optional] 
**user_id** | **str** | The id of the user this participation belongs to | [optional] 

## Example

```python
from openapi_client.models.participation import Participation

# TODO update the JSON string below
json = "{}"
# create an instance of Participation from a JSON string
participation_instance = Participation.from_json(json)
# print the JSON string representation of the object
print(Participation.to_json())

# convert the object into a dict
participation_dict = participation_instance.to_dict()
# create an instance of Participation from a dict
participation_from_dict = Participation.from_dict(participation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


