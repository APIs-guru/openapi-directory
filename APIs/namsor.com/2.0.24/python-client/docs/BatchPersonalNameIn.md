# BatchPersonalNameIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names** | [**List[PersonalNameIn]**](PersonalNameIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_personal_name_in import BatchPersonalNameIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPersonalNameIn from a JSON string
batch_personal_name_in_instance = BatchPersonalNameIn.from_json(json)
# print the JSON string representation of the object
print(BatchPersonalNameIn.to_json())

# convert the object into a dict
batch_personal_name_in_dict = batch_personal_name_in_instance.to_dict()
# create an instance of BatchPersonalNameIn from a dict
batch_personal_name_in_from_dict = BatchPersonalNameIn.from_dict(batch_personal_name_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


