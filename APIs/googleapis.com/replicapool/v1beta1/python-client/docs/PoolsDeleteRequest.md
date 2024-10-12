# PoolsDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abandon_instances** | **List[str]** | If there are instances you would like to keep, you can specify them here. These instances won&#39;t be deleted, but the associated replica objects will be removed. | [optional] 

## Example

```python
from openapi_client.models.pools_delete_request import PoolsDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PoolsDeleteRequest from a JSON string
pools_delete_request_instance = PoolsDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(PoolsDeleteRequest.to_json())

# convert the object into a dict
pools_delete_request_dict = pools_delete_request_instance.to_dict()
# create an instance of PoolsDeleteRequest from a dict
pools_delete_request_from_dict = PoolsDeleteRequest.from_dict(pools_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


