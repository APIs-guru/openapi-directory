# ConsortiumMember

Consortium approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_modified** | **datetime** | Gets the consortium member modified date. | [optional] 
**display_name** | **str** | Gets the consortium member display name. | [optional] 
**join_date** | **datetime** | Gets the consortium member join date. | [optional] 
**name** | **str** | Gets the consortium member name. | [optional] 
**role** | **str** | Gets the consortium member role. | [optional] 
**status** | **str** | Gets the consortium member status. | [optional] 
**subscription_id** | **str** | Gets the consortium member subscription id. | [optional] 

## Example

```python
from openapi_client.models.consortium_member import ConsortiumMember

# TODO update the JSON string below
json = "{}"
# create an instance of ConsortiumMember from a JSON string
consortium_member_instance = ConsortiumMember.from_json(json)
# print the JSON string representation of the object
print(ConsortiumMember.to_json())

# convert the object into a dict
consortium_member_dict = consortium_member_instance.to_dict()
# create an instance of ConsortiumMember from a dict
consortium_member_from_dict = ConsortiumMember.from_dict(consortium_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


