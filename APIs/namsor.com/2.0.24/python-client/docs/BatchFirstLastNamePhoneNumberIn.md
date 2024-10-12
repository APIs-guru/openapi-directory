# BatchFirstLastNamePhoneNumberIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names_with_phone_numbers** | [**List[FirstLastNamePhoneNumberIn]**](FirstLastNamePhoneNumberIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_phone_number_in import BatchFirstLastNamePhoneNumberIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNamePhoneNumberIn from a JSON string
batch_first_last_name_phone_number_in_instance = BatchFirstLastNamePhoneNumberIn.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNamePhoneNumberIn.to_json())

# convert the object into a dict
batch_first_last_name_phone_number_in_dict = batch_first_last_name_phone_number_in_instance.to_dict()
# create an instance of BatchFirstLastNamePhoneNumberIn from a dict
batch_first_last_name_phone_number_in_from_dict = BatchFirstLastNamePhoneNumberIn.from_dict(batch_first_last_name_phone_number_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


