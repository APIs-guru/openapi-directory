# QueueService

Queue service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QueueServiceProperties**](QueueServiceProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource Name. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.queue_service import QueueService

# TODO update the JSON string below
json = "{}"
# create an instance of QueueService from a JSON string
queue_service_instance = QueueService.from_json(json)
# print the JSON string representation of the object
print(QueueService.to_json())

# convert the object into a dict
queue_service_dict = queue_service_instance.to_dict()
# create an instance of QueueService from a dict
queue_service_from_dict = QueueService.from_dict(queue_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


