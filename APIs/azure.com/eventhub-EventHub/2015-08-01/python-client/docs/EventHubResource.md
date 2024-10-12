# EventHubResource

Single item in List or Get Event Hub operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubProperties**](EventHubProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_hub_resource import EventHubResource

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubResource from a JSON string
event_hub_resource_instance = EventHubResource.from_json(json)
# print the JSON string representation of the object
print(EventHubResource.to_json())

# convert the object into a dict
event_hub_resource_dict = event_hub_resource_instance.to_dict()
# create an instance of EventHubResource from a dict
event_hub_resource_from_dict = EventHubResource.from_dict(event_hub_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


