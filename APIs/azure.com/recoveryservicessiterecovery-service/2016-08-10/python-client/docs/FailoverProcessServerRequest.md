# FailoverProcessServerRequest

Request to failover a process server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FailoverProcessServerRequestProperties**](FailoverProcessServerRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.failover_process_server_request import FailoverProcessServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverProcessServerRequest from a JSON string
failover_process_server_request_instance = FailoverProcessServerRequest.from_json(json)
# print the JSON string representation of the object
print(FailoverProcessServerRequest.to_json())

# convert the object into a dict
failover_process_server_request_dict = failover_process_server_request_instance.to_dict()
# create an instance of FailoverProcessServerRequest from a dict
failover_process_server_request_from_dict = FailoverProcessServerRequest.from_dict(failover_process_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


