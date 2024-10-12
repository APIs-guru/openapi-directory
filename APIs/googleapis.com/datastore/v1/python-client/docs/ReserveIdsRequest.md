# ReserveIdsRequest

The request for Datastore.ReserveIds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | The ID of the database against which to make the request. &#39;(default)&#39; is not allowed; please use empty string &#39;&#39; to refer the default database. | [optional] 
**keys** | [**List[Key]**](Key.md) | Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated. | [optional] 

## Example

```python
from openapi_client.models.reserve_ids_request import ReserveIdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReserveIdsRequest from a JSON string
reserve_ids_request_instance = ReserveIdsRequest.from_json(json)
# print the JSON string representation of the object
print(ReserveIdsRequest.to_json())

# convert the object into a dict
reserve_ids_request_dict = reserve_ids_request_instance.to_dict()
# create an instance of ReserveIdsRequest from a dict
reserve_ids_request_from_dict = ReserveIdsRequest.from_dict(reserve_ids_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


