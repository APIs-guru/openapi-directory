# BatchPersonalNameParsedOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[PersonalNameParsedOut]**](PersonalNameParsedOut.md) | Classified parsed names | [optional] 

## Example

```python
from openapi_client.models.batch_personal_name_parsed_out import BatchPersonalNameParsedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPersonalNameParsedOut from a JSON string
batch_personal_name_parsed_out_instance = BatchPersonalNameParsedOut.from_json(json)
# print the JSON string representation of the object
print(BatchPersonalNameParsedOut.to_json())

# convert the object into a dict
batch_personal_name_parsed_out_dict = batch_personal_name_parsed_out_instance.to_dict()
# create an instance of BatchPersonalNameParsedOut from a dict
batch_personal_name_parsed_out_from_dict = BatchPersonalNameParsedOut.from_dict(batch_personal_name_parsed_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


