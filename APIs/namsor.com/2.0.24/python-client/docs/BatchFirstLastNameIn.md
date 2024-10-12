# BatchFirstLastNameIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names** | [**List[FirstLastNameIn]**](FirstLastNameIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_in import BatchFirstLastNameIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameIn from a JSON string
batch_first_last_name_in_instance = BatchFirstLastNameIn.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameIn.to_json())

# convert the object into a dict
batch_first_last_name_in_dict = batch_first_last_name_in_instance.to_dict()
# create an instance of BatchFirstLastNameIn from a dict
batch_first_last_name_in_from_dict = BatchFirstLastNameIn.from_dict(batch_first_last_name_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


