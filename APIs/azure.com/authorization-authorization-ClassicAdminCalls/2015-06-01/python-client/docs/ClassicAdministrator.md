# ClassicAdministrator

Classic Administrators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the administrator. | [optional] 
**name** | **str** | The name of the administrator. | [optional] 
**properties** | [**ClassicAdministratorProperties**](ClassicAdministratorProperties.md) |  | [optional] 
**type** | **str** | The type of the administrator. | [optional] 

## Example

```python
from openapi_client.models.classic_administrator import ClassicAdministrator

# TODO update the JSON string below
json = "{}"
# create an instance of ClassicAdministrator from a JSON string
classic_administrator_instance = ClassicAdministrator.from_json(json)
# print the JSON string representation of the object
print(ClassicAdministrator.to_json())

# convert the object into a dict
classic_administrator_dict = classic_administrator_instance.to_dict()
# create an instance of ClassicAdministrator from a dict
classic_administrator_from_dict = ClassicAdministrator.from_dict(classic_administrator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


