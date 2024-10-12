# InstancesTruncateLogRequest

Instance truncate log request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**truncate_log_context** | [**TruncateLogContext**](TruncateLogContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_truncate_log_request import InstancesTruncateLogRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesTruncateLogRequest from a JSON string
instances_truncate_log_request_instance = InstancesTruncateLogRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesTruncateLogRequest.to_json())

# convert the object into a dict
instances_truncate_log_request_dict = instances_truncate_log_request_instance.to_dict()
# create an instance of InstancesTruncateLogRequest from a dict
instances_truncate_log_request_from_dict = InstancesTruncateLogRequest.from_dict(instances_truncate_log_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


