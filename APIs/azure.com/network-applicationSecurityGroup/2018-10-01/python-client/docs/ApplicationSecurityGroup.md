# ApplicationSecurityGroup

An application security group in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**ApplicationSecurityGroupPropertiesFormat**](ApplicationSecurityGroupPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_security_group import ApplicationSecurityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSecurityGroup from a JSON string
application_security_group_instance = ApplicationSecurityGroup.from_json(json)
# print the JSON string representation of the object
print(ApplicationSecurityGroup.to_json())

# convert the object into a dict
application_security_group_dict = application_security_group_instance.to_dict()
# create an instance of ApplicationSecurityGroup from a dict
application_security_group_from_dict = ApplicationSecurityGroup.from_dict(application_security_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


