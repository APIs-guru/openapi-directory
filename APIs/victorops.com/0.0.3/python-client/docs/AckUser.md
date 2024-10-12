# AckUser

A JSON object with first/last name and email of the user that acknowledged the incident.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first** | **str** |  | [optional] 
**last** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ack_user import AckUser

# TODO update the JSON string below
json = "{}"
# create an instance of AckUser from a JSON string
ack_user_instance = AckUser.from_json(json)
# print the JSON string representation of the object
print(AckUser.to_json())

# convert the object into a dict
ack_user_dict = ack_user_instance.to_dict()
# create an instance of AckUser from a dict
ack_user_from_dict = AckUser.from_dict(ack_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


