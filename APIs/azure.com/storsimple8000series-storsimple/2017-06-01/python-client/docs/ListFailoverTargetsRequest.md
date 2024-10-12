# ListFailoverTargetsRequest

The request object for fetching the list of failover targets (eligible devices for failover).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume_containers** | **List[str]** | The list of path IDs of the volume containers that needs to be failed-over, for which we want to fetch the eligible targets. | [optional] 

## Example

```python
from openapi_client.models.list_failover_targets_request import ListFailoverTargetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListFailoverTargetsRequest from a JSON string
list_failover_targets_request_instance = ListFailoverTargetsRequest.from_json(json)
# print the JSON string representation of the object
print(ListFailoverTargetsRequest.to_json())

# convert the object into a dict
list_failover_targets_request_dict = list_failover_targets_request_instance.to_dict()
# create an instance of ListFailoverTargetsRequest from a dict
list_failover_targets_request_from_dict = ListFailoverTargetsRequest.from_dict(list_failover_targets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


