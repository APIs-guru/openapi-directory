# ConsumerInvitationList

List response for get InvitationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[ConsumerInvitation]**](ConsumerInvitation.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.consumer_invitation_list import ConsumerInvitationList

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerInvitationList from a JSON string
consumer_invitation_list_instance = ConsumerInvitationList.from_json(json)
# print the JSON string representation of the object
print(ConsumerInvitationList.to_json())

# convert the object into a dict
consumer_invitation_list_dict = consumer_invitation_list_instance.to_dict()
# create an instance of ConsumerInvitationList from a dict
consumer_invitation_list_from_dict = ConsumerInvitationList.from_dict(consumer_invitation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


