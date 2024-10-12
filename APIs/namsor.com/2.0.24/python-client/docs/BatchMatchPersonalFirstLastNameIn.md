# BatchMatchPersonalFirstLastNameIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names** | [**List[MatchPersonalFirstLastNameIn]**](MatchPersonalFirstLastNameIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_match_personal_first_last_name_in import BatchMatchPersonalFirstLastNameIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchMatchPersonalFirstLastNameIn from a JSON string
batch_match_personal_first_last_name_in_instance = BatchMatchPersonalFirstLastNameIn.from_json(json)
# print the JSON string representation of the object
print(BatchMatchPersonalFirstLastNameIn.to_json())

# convert the object into a dict
batch_match_personal_first_last_name_in_dict = batch_match_personal_first_last_name_in_instance.to_dict()
# create an instance of BatchMatchPersonalFirstLastNameIn from a dict
batch_match_personal_first_last_name_in_from_dict = BatchMatchPersonalFirstLastNameIn.from_dict(batch_match_personal_first_last_name_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


