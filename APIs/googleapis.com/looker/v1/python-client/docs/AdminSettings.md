# AdminSettings

Looker instance Admin settings fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_email_domains** | **List[str]** | Email domain allowlist for the instance. | [optional] 

## Example

```python
from openapi_client.models.admin_settings import AdminSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AdminSettings from a JSON string
admin_settings_instance = AdminSettings.from_json(json)
# print the JSON string representation of the object
print(AdminSettings.to_json())

# convert the object into a dict
admin_settings_dict = admin_settings_instance.to_dict()
# create an instance of AdminSettings from a dict
admin_settings_from_dict = AdminSettings.from_dict(admin_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


