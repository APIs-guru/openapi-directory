# SecurityContactProperties

describes security contact properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_notifications** | **str** | Whether to send security alerts notifications to the security contact | 
**alerts_to_admins** | **str** | Whether to send security alerts notifications to subscription admins | 
**email** | **str** | The email of this security contact | 
**phone** | **str** | The phone number of this security contact | [optional] 

## Example

```python
from openapi_client.models.security_contact_properties import SecurityContactProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityContactProperties from a JSON string
security_contact_properties_instance = SecurityContactProperties.from_json(json)
# print the JSON string representation of the object
print(SecurityContactProperties.to_json())

# convert the object into a dict
security_contact_properties_dict = security_contact_properties_instance.to_dict()
# create an instance of SecurityContactProperties from a dict
security_contact_properties_from_dict = SecurityContactProperties.from_dict(security_contact_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


