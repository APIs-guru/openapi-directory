# VerificationSettings

Settings to verify the value of JWT token fields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **Dict[str, str]** | Fields to verify with their values | 
**mapping_settings** | [**MappingSettings**](MappingSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.verification_settings import VerificationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationSettings from a JSON string
verification_settings_instance = VerificationSettings.from_json(json)
# print the JSON string representation of the object
print(VerificationSettings.to_json())

# convert the object into a dict
verification_settings_dict = verification_settings_instance.to_dict()
# create an instance of VerificationSettings from a dict
verification_settings_from_dict = VerificationSettings.from_dict(verification_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


