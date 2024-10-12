# PeeringService

Peering Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. | 
**properties** | [**PeeringServiceProperties**](PeeringServiceProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service import PeeringService

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringService from a JSON string
peering_service_instance = PeeringService.from_json(json)
# print the JSON string representation of the object
print(PeeringService.to_json())

# convert the object into a dict
peering_service_dict = peering_service_instance.to_dict()
# create an instance of PeeringService from a dict
peering_service_from_dict = PeeringService.from_dict(peering_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


