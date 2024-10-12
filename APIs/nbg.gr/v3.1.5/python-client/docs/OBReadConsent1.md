# OBReadConsent1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBReadData1**](OBReadData1.md) |  | 
**risk** | **object** | The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. | 

## Example

```python
from openapi_client.models.ob_read_consent1 import OBReadConsent1

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadConsent1 from a JSON string
ob_read_consent1_instance = OBReadConsent1.from_json(json)
# print the JSON string representation of the object
print(OBReadConsent1.to_json())

# convert the object into a dict
ob_read_consent1_dict = ob_read_consent1_instance.to_dict()
# create an instance of OBReadConsent1 from a dict
ob_read_consent1_from_dict = OBReadConsent1.from_dict(ob_read_consent1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


