# OBWriteInternationalStandingOrderConsentResponse7


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWriteInternationalStandingOrderConsentResponse7Data**](OBWriteInternationalStandingOrderConsentResponse7Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**risk** | [**OBRisk1**](OBRisk1.md) |  | 

## Example

```python
from openapi_client.models.ob_write_international_standing_order_consent_response7 import OBWriteInternationalStandingOrderConsentResponse7

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalStandingOrderConsentResponse7 from a JSON string
ob_write_international_standing_order_consent_response7_instance = OBWriteInternationalStandingOrderConsentResponse7.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalStandingOrderConsentResponse7.to_json())

# convert the object into a dict
ob_write_international_standing_order_consent_response7_dict = ob_write_international_standing_order_consent_response7_instance.to_dict()
# create an instance of OBWriteInternationalStandingOrderConsentResponse7 from a dict
ob_write_international_standing_order_consent_response7_from_dict = OBWriteInternationalStandingOrderConsentResponse7.from_dict(ob_write_international_standing_order_consent_response7_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


