# ResourceHealth

Health information related to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ResourceHealthModel**](ResourceHealthModel.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_health import ResourceHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealth from a JSON string
resource_health_instance = ResourceHealth.from_json(json)
# print the JSON string representation of the object
print(ResourceHealth.to_json())

# convert the object into a dict
resource_health_dict = resource_health_instance.to_dict()
# create an instance of ResourceHealth from a dict
resource_health_from_dict = ResourceHealth.from_dict(resource_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


