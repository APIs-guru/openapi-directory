# SecuritySchemeLevelBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue security scheme level. | [optional] 
**is_default** | **bool** | Specifies whether the level is the default level. False by default. | [optional] 
**members** | [**List[SecuritySchemeLevelMemberBean]**](SecuritySchemeLevelMemberBean.md) | The list of level members which should be added to the issue security scheme level. | [optional] 
**name** | **str** | The name of the issue security scheme level. Must be unique. | 

## Example

```python
from openapi_client.models.security_scheme_level_bean import SecuritySchemeLevelBean

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemeLevelBean from a JSON string
security_scheme_level_bean_instance = SecuritySchemeLevelBean.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemeLevelBean.to_json())

# convert the object into a dict
security_scheme_level_bean_dict = security_scheme_level_bean_instance.to_dict()
# create an instance of SecuritySchemeLevelBean from a dict
security_scheme_level_bean_from_dict = SecuritySchemeLevelBean.from_dict(security_scheme_level_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


