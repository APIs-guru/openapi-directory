# QueueResource

Description of queue Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QueueProperties**](QueueProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.queue_resource import QueueResource

# TODO update the JSON string below
json = "{}"
# create an instance of QueueResource from a JSON string
queue_resource_instance = QueueResource.from_json(json)
# print the JSON string representation of the object
print(QueueResource.to_json())

# convert the object into a dict
queue_resource_dict = queue_resource_instance.to_dict()
# create an instance of QueueResource from a dict
queue_resource_from_dict = QueueResource.from_dict(queue_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


