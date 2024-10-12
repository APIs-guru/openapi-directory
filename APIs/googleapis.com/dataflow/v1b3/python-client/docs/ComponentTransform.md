# ComponentTransform

Description of a transform executed as part of an execution stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Dataflow service generated name for this source. | [optional] 
**original_transform** | **str** | User name for the original user transform with which this transform is most closely associated. | [optional] 
**user_name** | **str** | Human-readable name for this transform; may be user or system generated. | [optional] 

## Example

```python
from openapi_client.models.component_transform import ComponentTransform

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentTransform from a JSON string
component_transform_instance = ComponentTransform.from_json(json)
# print the JSON string representation of the object
print(ComponentTransform.to_json())

# convert the object into a dict
component_transform_dict = component_transform_instance.to_dict()
# create an instance of ComponentTransform from a dict
component_transform_from_dict = ComponentTransform.from_dict(component_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


