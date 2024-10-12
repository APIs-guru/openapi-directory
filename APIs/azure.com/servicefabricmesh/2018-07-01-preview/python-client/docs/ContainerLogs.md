# ContainerLogs

The logs of the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | content of the log. | [optional] 

## Example

```python
from openapi_client.models.container_logs import ContainerLogs

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerLogs from a JSON string
container_logs_instance = ContainerLogs.from_json(json)
# print the JSON string representation of the object
print(ContainerLogs.to_json())

# convert the object into a dict
container_logs_dict = container_logs_instance.to_dict()
# create an instance of ContainerLogs from a dict
container_logs_from_dict = ContainerLogs.from_dict(container_logs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


