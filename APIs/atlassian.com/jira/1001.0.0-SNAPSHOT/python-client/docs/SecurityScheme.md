# SecurityScheme

Details about a security scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_security_level_id** | **int** | The ID of the default security level. | [optional] [readonly] 
**description** | **str** | The description of the issue security scheme. | [optional] [readonly] 
**id** | **int** | The ID of the issue security scheme. | [optional] [readonly] 
**levels** | [**List[SecurityLevel]**](SecurityLevel.md) |  | [optional] 
**name** | **str** | The name of the issue security scheme. | [optional] [readonly] 
**var_self** | **str** | The URL of the issue security scheme. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_scheme import SecurityScheme

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityScheme from a JSON string
security_scheme_instance = SecurityScheme.from_json(json)
# print the JSON string representation of the object
print(SecurityScheme.to_json())

# convert the object into a dict
security_scheme_dict = security_scheme_instance.to_dict()
# create an instance of SecurityScheme from a dict
security_scheme_from_dict = SecurityScheme.from_dict(security_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


