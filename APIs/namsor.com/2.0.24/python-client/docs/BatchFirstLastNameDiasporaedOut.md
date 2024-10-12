# BatchFirstLastNameDiasporaedOut

Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[FirstLastNameDiasporaedOut]**](FirstLastNameDiasporaedOut.md) | Classified diaspora names | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_diasporaed_out import BatchFirstLastNameDiasporaedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameDiasporaedOut from a JSON string
batch_first_last_name_diasporaed_out_instance = BatchFirstLastNameDiasporaedOut.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameDiasporaedOut.to_json())

# convert the object into a dict
batch_first_last_name_diasporaed_out_dict = batch_first_last_name_diasporaed_out_instance.to_dict()
# create an instance of BatchFirstLastNameDiasporaedOut from a dict
batch_first_last_name_diasporaed_out_from_dict = BatchFirstLastNameDiasporaedOut.from_dict(batch_first_last_name_diasporaed_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


