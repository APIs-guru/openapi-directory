# Consent

User consent status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_personalization** | **str** | Represents consent for ad personalization. | [optional] 
**ad_user_data** | **str** | Represents consent for ad user data. | [optional] 

## Example

```python
from openapi_client.models.consent import Consent

# TODO update the JSON string below
json = "{}"
# create an instance of Consent from a JSON string
consent_instance = Consent.from_json(json)
# print the JSON string representation of the object
print(Consent.to_json())

# convert the object into a dict
consent_dict = consent_instance.to_dict()
# create an instance of Consent from a dict
consent_from_dict = Consent.from_dict(consent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


