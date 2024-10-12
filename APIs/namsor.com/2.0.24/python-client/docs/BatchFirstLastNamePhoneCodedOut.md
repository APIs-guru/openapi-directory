# BatchFirstLastNamePhoneCodedOut

Represents the output of inferring the LIKELY country and phone code of personal names+phones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names_with_phone_numbers** | [**List[FirstLastNamePhoneCodedOut]**](FirstLastNamePhoneCodedOut.md) | Classified phone-coded names | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_phone_coded_out import BatchFirstLastNamePhoneCodedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNamePhoneCodedOut from a JSON string
batch_first_last_name_phone_coded_out_instance = BatchFirstLastNamePhoneCodedOut.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNamePhoneCodedOut.to_json())

# convert the object into a dict
batch_first_last_name_phone_coded_out_dict = batch_first_last_name_phone_coded_out_instance.to_dict()
# create an instance of BatchFirstLastNamePhoneCodedOut from a dict
batch_first_last_name_phone_coded_out_from_dict = BatchFirstLastNamePhoneCodedOut.from_dict(batch_first_last_name_phone_coded_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


