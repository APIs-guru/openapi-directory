# AvailableServiceAlias

The available service alias.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the service alias. | [optional] 
**name** | **str** | The name of the service alias. | [optional] 
**resource_name** | **str** | The resource name of the service alias. | [optional] 
**type** | **str** | The type of the resource. | [optional] 

## Example

```python
from openapi_client.models.available_service_alias import AvailableServiceAlias

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableServiceAlias from a JSON string
available_service_alias_instance = AvailableServiceAlias.from_json(json)
# print the JSON string representation of the object
print(AvailableServiceAlias.to_json())

# convert the object into a dict
available_service_alias_dict = available_service_alias_instance.to_dict()
# create an instance of AvailableServiceAlias from a dict
available_service_alias_from_dict = AvailableServiceAlias.from_dict(available_service_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


