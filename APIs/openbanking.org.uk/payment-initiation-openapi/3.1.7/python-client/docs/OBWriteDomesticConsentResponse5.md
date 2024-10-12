# OBWriteDomesticConsentResponse5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWriteDomesticConsentResponse5Data**](OBWriteDomesticConsentResponse5Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**risk** | [**OBRisk1**](OBRisk1.md) |  | 

## Example

```python
from openapi_client.models.ob_write_domestic_consent_response5 import OBWriteDomesticConsentResponse5

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticConsentResponse5 from a JSON string
ob_write_domestic_consent_response5_instance = OBWriteDomesticConsentResponse5.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticConsentResponse5.to_json())

# convert the object into a dict
ob_write_domestic_consent_response5_dict = ob_write_domestic_consent_response5_instance.to_dict()
# create an instance of OBWriteDomesticConsentResponse5 from a dict
ob_write_domestic_consent_response5_from_dict = OBWriteDomesticConsentResponse5.from_dict(ob_write_domestic_consent_response5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


