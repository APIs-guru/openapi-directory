# TriggerResource

Trigger resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | Azure data factory nested object which contains information about creating pipeline run | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trigger_resource import TriggerResource

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerResource from a JSON string
trigger_resource_instance = TriggerResource.from_json(json)
# print the JSON string representation of the object
print(TriggerResource.to_json())

# convert the object into a dict
trigger_resource_dict = trigger_resource_instance.to_dict()
# create an instance of TriggerResource from a dict
trigger_resource_from_dict = TriggerResource.from_dict(trigger_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


