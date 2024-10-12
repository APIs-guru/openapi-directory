# OBWriteDomesticStandingOrderConsentResponse6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWriteDomesticStandingOrderConsentResponse6Data**](OBWriteDomesticStandingOrderConsentResponse6Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**risk** | [**OBRisk1**](OBRisk1.md) |  | 

## Example

```python
from openapi_client.models.ob_write_domestic_standing_order_consent_response6 import OBWriteDomesticStandingOrderConsentResponse6

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticStandingOrderConsentResponse6 from a JSON string
ob_write_domestic_standing_order_consent_response6_instance = OBWriteDomesticStandingOrderConsentResponse6.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticStandingOrderConsentResponse6.to_json())

# convert the object into a dict
ob_write_domestic_standing_order_consent_response6_dict = ob_write_domestic_standing_order_consent_response6_instance.to_dict()
# create an instance of OBWriteDomesticStandingOrderConsentResponse6 from a dict
ob_write_domestic_standing_order_consent_response6_from_dict = OBWriteDomesticStandingOrderConsentResponse6.from_dict(ob_write_domestic_standing_order_consent_response6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


