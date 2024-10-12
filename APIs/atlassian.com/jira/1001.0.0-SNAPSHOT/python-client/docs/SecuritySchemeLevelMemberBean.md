# SecuritySchemeLevelMemberBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **str** | The value corresponding to the specified member type. | [optional] 
**type** | **str** | The issue security level member type, e.g &#x60;reporter&#x60;, &#x60;group&#x60;, &#x60;user&#x60;. | 

## Example

```python
from openapi_client.models.security_scheme_level_member_bean import SecuritySchemeLevelMemberBean

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemeLevelMemberBean from a JSON string
security_scheme_level_member_bean_instance = SecuritySchemeLevelMemberBean.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemeLevelMemberBean.to_json())

# convert the object into a dict
security_scheme_level_member_bean_dict = security_scheme_level_member_bean_instance.to_dict()
# create an instance of SecuritySchemeLevelMemberBean from a dict
security_scheme_level_member_bean_from_dict = SecuritySchemeLevelMemberBean.from_dict(security_scheme_level_member_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


