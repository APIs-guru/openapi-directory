# Hub

Hub resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HubPropertiesFormat**](HubPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hub import Hub

# TODO update the JSON string below
json = "{}"
# create an instance of Hub from a JSON string
hub_instance = Hub.from_json(json)
# print the JSON string representation of the object
print(Hub.to_json())

# convert the object into a dict
hub_dict = hub_instance.to_dict()
# create an instance of Hub from a dict
hub_from_dict = Hub.from_dict(hub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


