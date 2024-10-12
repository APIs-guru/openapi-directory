# BatchFirstLastNameOriginedOut

Represents the output of inferring the LIKELY origin from a list of personal names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[FirstLastNameOriginedOut]**](FirstLastNameOriginedOut.md) | Classified origined names | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_origined_out import BatchFirstLastNameOriginedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameOriginedOut from a JSON string
batch_first_last_name_origined_out_instance = BatchFirstLastNameOriginedOut.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameOriginedOut.to_json())

# convert the object into a dict
batch_first_last_name_origined_out_dict = batch_first_last_name_origined_out_instance.to_dict()
# create an instance of BatchFirstLastNameOriginedOut from a dict
batch_first_last_name_origined_out_from_dict = BatchFirstLastNameOriginedOut.from_dict(batch_first_last_name_origined_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


