# AdministratorProperties

Properties of a active directory administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_type** | **str** | Type of the sever administrator. | 
**login** | **str** | Login name of the server administrator. | 
**sid** | **str** | SID (object ID) of the server administrator. | 
**tenant_id** | **str** | Tenant ID of the administrator. | [optional] 

## Example

```python
from openapi_client.models.administrator_properties import AdministratorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorProperties from a JSON string
administrator_properties_instance = AdministratorProperties.from_json(json)
# print the JSON string representation of the object
print(AdministratorProperties.to_json())

# convert the object into a dict
administrator_properties_dict = administrator_properties_instance.to_dict()
# create an instance of AdministratorProperties from a dict
administrator_properties_from_dict = AdministratorProperties.from_dict(administrator_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


