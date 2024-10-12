# ClassicAdministratorProperties

Classic Administrator properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address of the administrator. | [optional] 
**role** | **str** | The role of the administrator. | [optional] 

## Example

```python
from openapi_client.models.classic_administrator_properties import ClassicAdministratorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClassicAdministratorProperties from a JSON string
classic_administrator_properties_instance = ClassicAdministratorProperties.from_json(json)
# print the JSON string representation of the object
print(ClassicAdministratorProperties.to_json())

# convert the object into a dict
classic_administrator_properties_dict = classic_administrator_properties_instance.to_dict()
# create an instance of ClassicAdministratorProperties from a dict
classic_administrator_properties_from_dict = ClassicAdministratorProperties.from_dict(classic_administrator_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


