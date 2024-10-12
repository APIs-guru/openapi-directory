# ConsumerInvitation

A consumer Invitation data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConsumerInvitationProperties**](ConsumerInvitationProperties.md) |  | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_invitation import ConsumerInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerInvitation from a JSON string
consumer_invitation_instance = ConsumerInvitation.from_json(json)
# print the JSON string representation of the object
print(ConsumerInvitation.to_json())

# convert the object into a dict
consumer_invitation_dict = consumer_invitation_instance.to_dict()
# create an instance of ConsumerInvitation from a dict
consumer_invitation_from_dict = ConsumerInvitation.from_dict(consumer_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


