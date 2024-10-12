# ConsumerInvitationProperties

Properties of consumer invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_count** | **int** | Number of data sets in a share | [optional] [readonly] 
**description** | **str** | Description shared when the invitation was created | [optional] [readonly] 
**invitation_id** | **str** | Unique id of the invitation. | 
**invitation_status** | **str** | The status of the invitation. | [optional] [readonly] 
**location** | **str** | invitation location | [optional] [readonly] 
**provider_email** | **str** | Email of the provider who created the resource | [optional] [readonly] 
**provider_name** | **str** | Name of the provider who created the resource | [optional] [readonly] 
**provider_tenant_name** | **str** | Tenant name of the provider who created the resource | [optional] [readonly] 
**responded_at** | **datetime** | The time the recipient responded to the invitation. | [optional] [readonly] 
**sent_at** | **datetime** | Gets the time at which the invitation was sent. | [optional] [readonly] 
**share_name** | **str** | Gets the source share Name. | [optional] [readonly] 
**terms_of_use** | **str** | Terms of use shared when the invitation was created | [optional] [readonly] 
**user_email** | **str** | Email of the user who created the resource | [optional] [readonly] 
**user_name** | **str** | Name of the user who created the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_invitation_properties import ConsumerInvitationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerInvitationProperties from a JSON string
consumer_invitation_properties_instance = ConsumerInvitationProperties.from_json(json)
# print the JSON string representation of the object
print(ConsumerInvitationProperties.to_json())

# convert the object into a dict
consumer_invitation_properties_dict = consumer_invitation_properties_instance.to_dict()
# create an instance of ConsumerInvitationProperties from a dict
consumer_invitation_properties_from_dict = ConsumerInvitationProperties.from_dict(consumer_invitation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


