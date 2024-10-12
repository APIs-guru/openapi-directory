# OBReadConsentResponse1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBReadDataConsentResponse1**](OBReadDataConsentResponse1.md) |  | 
**links** | [**Links**](Links.md) |  | 
**meta** | [**Meta**](Meta.md) |  | 
**risk** | **object** | The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. | 

## Example

```python
from openapi_client.models.ob_read_consent_response1 import OBReadConsentResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadConsentResponse1 from a JSON string
ob_read_consent_response1_instance = OBReadConsentResponse1.from_json(json)
# print the JSON string representation of the object
print(OBReadConsentResponse1.to_json())

# convert the object into a dict
ob_read_consent_response1_dict = ob_read_consent_response1_instance.to_dict()
# create an instance of OBReadConsentResponse1 from a dict
ob_read_consent_response1_from_dict = OBReadConsentResponse1.from_dict(ob_read_consent_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


