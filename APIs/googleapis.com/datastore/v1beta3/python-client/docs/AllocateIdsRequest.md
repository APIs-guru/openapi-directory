# AllocateIdsRequest

The request for Datastore.AllocateIds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[Key]**](Key.md) | Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only. | [optional] 

## Example

```python
from openapi_client.models.allocate_ids_request import AllocateIdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AllocateIdsRequest from a JSON string
allocate_ids_request_instance = AllocateIdsRequest.from_json(json)
# print the JSON string representation of the object
print(AllocateIdsRequest.to_json())

# convert the object into a dict
allocate_ids_request_dict = allocate_ids_request_instance.to_dict()
# create an instance of AllocateIdsRequest from a dict
allocate_ids_request_from_dict = AllocateIdsRequest.from_dict(allocate_ids_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


