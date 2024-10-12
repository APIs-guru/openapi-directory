# AddSecuritySchemeLevelsRequestBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**levels** | [**List[SecuritySchemeLevelBean]**](SecuritySchemeLevelBean.md) | The list of scheme levels which should be added to the security scheme. | [optional] 

## Example

```python
from openapi_client.models.add_security_scheme_levels_request_bean import AddSecuritySchemeLevelsRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of AddSecuritySchemeLevelsRequestBean from a JSON string
add_security_scheme_levels_request_bean_instance = AddSecuritySchemeLevelsRequestBean.from_json(json)
# print the JSON string representation of the object
print(AddSecuritySchemeLevelsRequestBean.to_json())

# convert the object into a dict
add_security_scheme_levels_request_bean_dict = add_security_scheme_levels_request_bean_instance.to_dict()
# create an instance of AddSecuritySchemeLevelsRequestBean from a dict
add_security_scheme_levels_request_bean_from_dict = AddSecuritySchemeLevelsRequestBean.from_dict(add_security_scheme_levels_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


