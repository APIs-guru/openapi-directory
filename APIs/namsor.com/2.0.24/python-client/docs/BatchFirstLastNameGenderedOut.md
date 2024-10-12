# BatchFirstLastNameGenderedOut

Represents the output of inferring the LIKELY gender from a list of personal names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[FirstLastNameGenderedOut]**](FirstLastNameGenderedOut.md) | Classified genderized names | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_gendered_out import BatchFirstLastNameGenderedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameGenderedOut from a JSON string
batch_first_last_name_gendered_out_instance = BatchFirstLastNameGenderedOut.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameGenderedOut.to_json())

# convert the object into a dict
batch_first_last_name_gendered_out_dict = batch_first_last_name_gendered_out_instance.to_dict()
# create an instance of BatchFirstLastNameGenderedOut from a dict
batch_first_last_name_gendered_out_from_dict = BatchFirstLastNameGenderedOut.from_dict(batch_first_last_name_gendered_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


