# GatewayResources

Collection of Gateway Resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[GatewayResource]**](GatewayResource.md) | Collection of Gateway Resources. | [optional] 

## Example

```python
from openapi_client.models.gateway_resources import GatewayResources

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayResources from a JSON string
gateway_resources_instance = GatewayResources.from_json(json)
# print the JSON string representation of the object
print(GatewayResources.to_json())

# convert the object into a dict
gateway_resources_dict = gateway_resources_instance.to_dict()
# create an instance of GatewayResources from a dict
gateway_resources_from_dict = GatewayResources.from_dict(gateway_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


