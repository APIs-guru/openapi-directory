# RawCertificateData

Raw Certificate Data From IDM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Specify the Authentication type | [optional] 
**certificate** | **str** | Gets or sets the base64 encoded certificate raw data string | 

## Example

```python
from openapi_client.models.raw_certificate_data import RawCertificateData

# TODO update the JSON string below
json = "{}"
# create an instance of RawCertificateData from a JSON string
raw_certificate_data_instance = RawCertificateData.from_json(json)
# print the JSON string representation of the object
print(RawCertificateData.to_json())

# convert the object into a dict
raw_certificate_data_dict = raw_certificate_data_instance.to_dict()
# create an instance of RawCertificateData from a dict
raw_certificate_data_from_dict = RawCertificateData.from_dict(raw_certificate_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


