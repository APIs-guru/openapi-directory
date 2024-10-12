# SubjectDescription

These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hex_serial_number** | **str** | The serial number encoded in lowercase hexadecimal. | [optional] 
**lifetime** | **str** | For convenience, the actual lifetime of an issued certificate. | [optional] 
**not_after_time** | **str** | The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to &#39;not_before_time&#39; + &#39;lifetime&#39; - 1 second. | [optional] 
**not_before_time** | **str** | The time at which the certificate becomes valid. | [optional] 
**subject** | [**Subject**](Subject.md) |  | [optional] 
**subject_alt_name** | [**SubjectAltNames**](SubjectAltNames.md) |  | [optional] 

## Example

```python
from openapi_client.models.subject_description import SubjectDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SubjectDescription from a JSON string
subject_description_instance = SubjectDescription.from_json(json)
# print the JSON string representation of the object
print(SubjectDescription.to_json())

# convert the object into a dict
subject_description_dict = subject_description_instance.to_dict()
# create an instance of SubjectDescription from a dict
subject_description_from_dict = SubjectDescription.from_dict(subject_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


