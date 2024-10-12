# SecurityContact

Contact details for security issues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityContactProperties**](SecurityContactProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_contact import SecurityContact

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityContact from a JSON string
security_contact_instance = SecurityContact.from_json(json)
# print the JSON string representation of the object
print(SecurityContact.to_json())

# convert the object into a dict
security_contact_dict = security_contact_instance.to_dict()
# create an instance of SecurityContact from a dict
security_contact_from_dict = SecurityContact.from_dict(security_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


