# DigitalAccountReferenceNumbers91

Contains the list of digital account reference numbers. This can be a list of multiple pan/timestamp pairs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digital_account_reference_number** | [**List[DigitalAccountReferenceNumber92]**](DigitalAccountReferenceNumber92.md) | Contains the details of an individual digital account reference number.  | [optional] 

## Example

```python
from openapi_client.models.digital_account_reference_numbers91 import DigitalAccountReferenceNumbers91

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccountReferenceNumbers91 from a JSON string
digital_account_reference_numbers91_instance = DigitalAccountReferenceNumbers91.from_json(json)
# print the JSON string representation of the object
print(DigitalAccountReferenceNumbers91.to_json())

# convert the object into a dict
digital_account_reference_numbers91_dict = digital_account_reference_numbers91_instance.to_dict()
# create an instance of DigitalAccountReferenceNumbers91 from a dict
digital_account_reference_numbers91_from_dict = DigitalAccountReferenceNumbers91.from_dict(digital_account_reference_numbers91_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


