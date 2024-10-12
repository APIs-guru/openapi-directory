# DigitalAccountReferenceNumber92

Contains the details of an individual digital account reference number. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_timestamp** | **str** | Date and time the Digital Account Reference Number was created. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**pan** | **str** | URI describing the account. URI scheme must be pan.Valid Values- Refer &#39;Account URIs&#39;.  | [optional] 

## Example

```python
from openapi_client.models.digital_account_reference_number92 import DigitalAccountReferenceNumber92

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccountReferenceNumber92 from a JSON string
digital_account_reference_number92_instance = DigitalAccountReferenceNumber92.from_json(json)
# print the JSON string representation of the object
print(DigitalAccountReferenceNumber92.to_json())

# convert the object into a dict
digital_account_reference_number92_dict = digital_account_reference_number92_instance.to_dict()
# create an instance of DigitalAccountReferenceNumber92 from a dict
digital_account_reference_number92_from_dict = DigitalAccountReferenceNumber92.from_dict(digital_account_reference_number92_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


