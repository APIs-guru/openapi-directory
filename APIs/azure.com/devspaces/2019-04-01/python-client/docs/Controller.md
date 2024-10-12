# Controller


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ControllerProperties**](ControllerProperties.md) |  | 
**sku** | [**Sku**](Sku.md) |  | 
**location** | **str** | Region where the Azure resource is located. | [optional] 
**tags** | **Dict[str, str]** | Tags for the Azure resource. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.controller import Controller

# TODO update the JSON string below
json = "{}"
# create an instance of Controller from a JSON string
controller_instance = Controller.from_json(json)
# print the JSON string representation of the object
print(Controller.to_json())

# convert the object into a dict
controller_dict = controller_instance.to_dict()
# create an instance of Controller from a dict
controller_from_dict = Controller.from_dict(controller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


