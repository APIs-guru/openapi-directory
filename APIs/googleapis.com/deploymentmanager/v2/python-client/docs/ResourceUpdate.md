# ResourceUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control** | [**ResourceAccessControl**](ResourceAccessControl.md) |  | [optional] 
**error** | [**ResourceUpdateError**](ResourceUpdateError.md) |  | [optional] 
**final_properties** | **str** | Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML. | [optional] 
**intent** | **str** | Output only. The intent of the resource: &#x60;PREVIEW&#x60;, &#x60;UPDATE&#x60;, or &#x60;CANCEL&#x60;. | [optional] 
**manifest** | **str** | Output only. URL of the manifest representing the update configuration of this resource. | [optional] 
**properties** | **str** | Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML. | [optional] 
**state** | **str** | Output only. The state of the resource. | [optional] 
**warnings** | [**List[OperationWarningsInner]**](OperationWarningsInner.md) | Output only. If warning messages are generated during processing of this resource, this field will be populated. | [optional] 

## Example

```python
from openapi_client.models.resource_update import ResourceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUpdate from a JSON string
resource_update_instance = ResourceUpdate.from_json(json)
# print the JSON string representation of the object
print(ResourceUpdate.to_json())

# convert the object into a dict
resource_update_dict = resource_update_instance.to_dict()
# create an instance of ResourceUpdate from a dict
resource_update_from_dict = ResourceUpdate.from_dict(resource_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


