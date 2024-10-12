# AllocateIdsResponse

The response for Datastore.AllocateIds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[Key]**](Key.md) | The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID. | [optional] 

## Example

```python
from openapi_client.models.allocate_ids_response import AllocateIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AllocateIdsResponse from a JSON string
allocate_ids_response_instance = AllocateIdsResponse.from_json(json)
# print the JSON string representation of the object
print(AllocateIdsResponse.to_json())

# convert the object into a dict
allocate_ids_response_dict = allocate_ids_response_instance.to_dict()
# create an instance of AllocateIdsResponse from a dict
allocate_ids_response_from_dict = AllocateIdsResponse.from_dict(allocate_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


