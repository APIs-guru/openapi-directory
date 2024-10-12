# TypesRequestBatchGetOrDelete

Request to get or delete time series types by IDs or type names. Exactly one of \"typeIds\" or \"names\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | List of names of time series types to return or delete. | [optional] 
**type_ids** | **List[str]** | List of IDs of time series types to return or delete. | [optional] 

## Example

```python
from openapi_client.models.types_request_batch_get_or_delete import TypesRequestBatchGetOrDelete

# TODO update the JSON string below
json = "{}"
# create an instance of TypesRequestBatchGetOrDelete from a JSON string
types_request_batch_get_or_delete_instance = TypesRequestBatchGetOrDelete.from_json(json)
# print the JSON string representation of the object
print(TypesRequestBatchGetOrDelete.to_json())

# convert the object into a dict
types_request_batch_get_or_delete_dict = types_request_batch_get_or_delete_instance.to_dict()
# create an instance of TypesRequestBatchGetOrDelete from a dict
types_request_batch_get_or_delete_from_dict = TypesRequestBatchGetOrDelete.from_dict(types_request_batch_get_or_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


