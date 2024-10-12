# SecurityIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_enabled** | **bool** |  | [optional] 
**links** | [**SecurityIdentityLinks**](SecurityIdentityLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.security_identity import SecurityIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityIdentity from a JSON string
security_identity_instance = SecurityIdentity.from_json(json)
# print the JSON string representation of the object
print(SecurityIdentity.to_json())

# convert the object into a dict
security_identity_dict = security_identity_instance.to_dict()
# create an instance of SecurityIdentity from a dict
security_identity_from_dict = SecurityIdentity.from_dict(security_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


