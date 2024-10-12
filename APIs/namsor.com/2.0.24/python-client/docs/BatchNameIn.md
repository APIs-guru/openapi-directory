# BatchNameIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**proper_nouns** | [**List[NameIn]**](NameIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_name_in import BatchNameIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchNameIn from a JSON string
batch_name_in_instance = BatchNameIn.from_json(json)
# print the JSON string representation of the object
print(BatchNameIn.to_json())

# convert the object into a dict
batch_name_in_dict = batch_name_in_instance.to_dict()
# create an instance of BatchNameIn from a dict
batch_name_in_from_dict = BatchNameIn.from_dict(batch_name_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


