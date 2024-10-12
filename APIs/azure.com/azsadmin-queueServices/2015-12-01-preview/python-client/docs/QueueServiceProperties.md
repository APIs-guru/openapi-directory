# QueueServiceProperties

Queue service properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **object** | Settings of storage services. | [optional] 
**health_status** | **str** | Current health status. | [optional] [readonly] 
**version** | **str** | Storage service version. | [optional] 

## Example

```python
from openapi_client.models.queue_service_properties import QueueServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QueueServiceProperties from a JSON string
queue_service_properties_instance = QueueServiceProperties.from_json(json)
# print the JSON string representation of the object
print(QueueServiceProperties.to_json())

# convert the object into a dict
queue_service_properties_dict = queue_service_properties_instance.to_dict()
# create an instance of QueueServiceProperties from a dict
queue_service_properties_from_dict = QueueServiceProperties.from_dict(queue_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


