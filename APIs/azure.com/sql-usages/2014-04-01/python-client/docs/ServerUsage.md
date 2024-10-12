# ServerUsage

Represents server metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | The current value of the metric. | [optional] [readonly] 
**display_name** | **str** | The metric display name. | [optional] [readonly] 
**limit** | **float** | The current limit of the metric. | [optional] [readonly] 
**name** | **str** | Name of the server usage metric. | [optional] [readonly] 
**next_reset_time** | **datetime** | The next reset time for the metric (ISO8601 format). | [optional] [readonly] 
**resource_name** | **str** | The name of the resource. | [optional] [readonly] 
**unit** | **str** | The units of the metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_usage import ServerUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ServerUsage from a JSON string
server_usage_instance = ServerUsage.from_json(json)
# print the JSON string representation of the object
print(ServerUsage.to_json())

# convert the object into a dict
server_usage_dict = server_usage_instance.to_dict()
# create an instance of ServerUsage from a dict
server_usage_from_dict = ServerUsage.from_dict(server_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


