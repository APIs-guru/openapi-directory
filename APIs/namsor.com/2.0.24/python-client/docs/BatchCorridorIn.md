# BatchCorridorIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corridor_from_to** | [**List[CorridorIn]**](CorridorIn.md) |  | [optional] 
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_corridor_in import BatchCorridorIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCorridorIn from a JSON string
batch_corridor_in_instance = BatchCorridorIn.from_json(json)
# print the JSON string representation of the object
print(BatchCorridorIn.to_json())

# convert the object into a dict
batch_corridor_in_dict = batch_corridor_in_instance.to_dict()
# create an instance of BatchCorridorIn from a dict
batch_corridor_in_from_dict = BatchCorridorIn.from_dict(batch_corridor_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


