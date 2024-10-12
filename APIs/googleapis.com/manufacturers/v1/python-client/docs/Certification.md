# Certification

Description of a certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **str** | Required. Name of the certification body. | [optional] 
**code** | **str** | Required. A unique code to identify the certification. | [optional] 
**link** | **str** | Optional. A URL link to the certification. | [optional] 
**logo** | **str** | Optional. A URL link to the certification logo. | [optional] 
**name** | **str** | Required. Name of the certification. | [optional] 
**valid_until** | **str** | Optional. The expiration date (UTC). | [optional] 
**value** | **str** | Optional. A custom value of the certification. | [optional] 

## Example

```python
from openapi_client.models.certification import Certification

# TODO update the JSON string below
json = "{}"
# create an instance of Certification from a JSON string
certification_instance = Certification.from_json(json)
# print the JSON string representation of the object
print(Certification.to_json())

# convert the object into a dict
certification_dict = certification_instance.to_dict()
# create an instance of Certification from a dict
certification_from_dict = Certification.from_dict(certification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


