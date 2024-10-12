# OBWriteInternationalScheduledConsentResponse6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWriteInternationalScheduledConsentResponse6Data**](OBWriteInternationalScheduledConsentResponse6Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**risk** | [**OBRisk1**](OBRisk1.md) |  | 

## Example

```python
from openapi_client.models.ob_write_international_scheduled_consent_response6 import OBWriteInternationalScheduledConsentResponse6

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalScheduledConsentResponse6 from a JSON string
ob_write_international_scheduled_consent_response6_instance = OBWriteInternationalScheduledConsentResponse6.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalScheduledConsentResponse6.to_json())

# convert the object into a dict
ob_write_international_scheduled_consent_response6_dict = ob_write_international_scheduled_consent_response6_instance.to_dict()
# create an instance of OBWriteInternationalScheduledConsentResponse6 from a dict
ob_write_international_scheduled_consent_response6_from_dict = OBWriteInternationalScheduledConsentResponse6.from_dict(ob_write_international_scheduled_consent_response6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


