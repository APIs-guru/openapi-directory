# ResourceAttributes

Attributes of resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessed_at** | **datetime** | Date-time of the time when resource was accessed. | [optional] 
**accessed_time** | **int** | UNIX timestamp of last access | [optional] 
**created_at** | **datetime** | Date-time of resource creation. | [optional] 
**created_by** | **str** | Username of the creator. | [optional] 
**created_time** | **int** | UNIX timestamp of resource creation | [optional] 
**extension** | **str** | Resource extension. Property exists only if resource &#x60;type&#x60; is file. | [optional] 
**file_count** | **int** | Number of files within folder. null if resource type is a file. | [optional] 
**hash** | **str** | Unique hash of the resource. | [optional] 
**name** | **str** | Resource name, e.g. the name of the file or folder. | [optional] 
**path** | **str** | Full path to the resource. | [optional] 
**previewable** | **bool** | Can resource be previewed. Property equals &#x60;null&#x60; if resource &#x60;type&#x60; is dir. | [optional] 
**size** | **int** | Resource size in bytes | [optional] 
**type** | **str** | Type of the resource. | [optional] 
**updated_at** | **datetime** | Date-time of resource modification. | [optional] 
**updated_time** | **int** | UNIX timestamp of resource modification | [optional] 
**upload_date** | **datetime** | Timestamp of resource upload. | [optional] 

## Example

```python
from openapi_client.models.resource_attributes import ResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceAttributes from a JSON string
resource_attributes_instance = ResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(ResourceAttributes.to_json())

# convert the object into a dict
resource_attributes_dict = resource_attributes_instance.to_dict()
# create an instance of ResourceAttributes from a dict
resource_attributes_from_dict = ResourceAttributes.from_dict(resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


