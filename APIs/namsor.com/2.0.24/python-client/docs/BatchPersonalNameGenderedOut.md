# BatchPersonalNameGenderedOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[PersonalNameGenderedOut]**](PersonalNameGenderedOut.md) | Classified genderized names | [optional] 

## Example

```python
from openapi_client.models.batch_personal_name_gendered_out import BatchPersonalNameGenderedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPersonalNameGenderedOut from a JSON string
batch_personal_name_gendered_out_instance = BatchPersonalNameGenderedOut.from_json(json)
# print the JSON string representation of the object
print(BatchPersonalNameGenderedOut.to_json())

# convert the object into a dict
batch_personal_name_gendered_out_dict = batch_personal_name_gendered_out_instance.to_dict()
# create an instance of BatchPersonalNameGenderedOut from a dict
batch_personal_name_gendered_out_from_dict = BatchPersonalNameGenderedOut.from_dict(batch_personal_name_gendered_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


