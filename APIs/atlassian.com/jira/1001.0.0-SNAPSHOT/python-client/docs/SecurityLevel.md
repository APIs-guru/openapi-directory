# SecurityLevel

Details of an issue level security item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue level security item. | [optional] [readonly] 
**id** | **str** | The ID of the issue level security item. | [optional] [readonly] 
**is_default** | **bool** | Whether the issue level security item is the default. | [optional] [readonly] 
**issue_security_scheme_id** | **str** | The ID of the issue level security scheme. | [optional] [readonly] 
**name** | **str** | The name of the issue level security item. | [optional] [readonly] 
**var_self** | **str** | The URL of the issue level security item. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_level import SecurityLevel

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityLevel from a JSON string
security_level_instance = SecurityLevel.from_json(json)
# print the JSON string representation of the object
print(SecurityLevel.to_json())

# convert the object into a dict
security_level_dict = security_level_instance.to_dict()
# create an instance of SecurityLevel from a dict
security_level_from_dict = SecurityLevel.from_dict(security_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


