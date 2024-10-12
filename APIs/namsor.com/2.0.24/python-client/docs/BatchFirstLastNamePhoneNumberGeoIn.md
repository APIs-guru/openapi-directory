# BatchFirstLastNamePhoneNumberGeoIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names_with_phone_numbers** | [**List[FirstLastNamePhoneNumberGeoIn]**](FirstLastNamePhoneNumberGeoIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_phone_number_geo_in import BatchFirstLastNamePhoneNumberGeoIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNamePhoneNumberGeoIn from a JSON string
batch_first_last_name_phone_number_geo_in_instance = BatchFirstLastNamePhoneNumberGeoIn.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNamePhoneNumberGeoIn.to_json())

# convert the object into a dict
batch_first_last_name_phone_number_geo_in_dict = batch_first_last_name_phone_number_geo_in_instance.to_dict()
# create an instance of BatchFirstLastNamePhoneNumberGeoIn from a dict
batch_first_last_name_phone_number_geo_in_from_dict = BatchFirstLastNamePhoneNumberGeoIn.from_dict(batch_first_last_name_phone_number_geo_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


