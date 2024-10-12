# SecurityRights


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_annotate** | **bool** |  | [optional] 
**can_delete** | **bool** |  | [optional] 
**can_execute** | **bool** |  | [optional] 
**can_read** | **bool** |  | [optional] 
**can_read_data** | **bool** |  | [optional] 
**can_subscribe** | **bool** |  | [optional] 
**can_subscribe_others** | **bool** |  | [optional] 
**can_write** | **bool** |  | [optional] 
**can_write_data** | **bool** |  | [optional] 
**has_admin** | **bool** |  | [optional] 
**links** | [**SecurityRightsLinks**](SecurityRightsLinks.md) |  | [optional] 
**owner_web_id** | **str** |  | [optional] 
**rights** | **List[str]** |  | [optional] 
**security_item** | **str** |  | [optional] 
**user_identity** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_rights import SecurityRights

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityRights from a JSON string
security_rights_instance = SecurityRights.from_json(json)
# print the JSON string representation of the object
print(SecurityRights.to_json())

# convert the object into a dict
security_rights_dict = security_rights_instance.to_dict()
# create an instance of SecurityRights from a dict
security_rights_from_dict = SecurityRights.from_dict(security_rights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


