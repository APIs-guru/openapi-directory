# AcceleratorType

A accelerator type that a Node can be configured with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name. | [optional] 
**type** | **str** | the accelerator type. | [optional] 

## Example

```python
from openapi_client.models.accelerator_type import AcceleratorType

# TODO update the JSON string below
json = "{}"
# create an instance of AcceleratorType from a JSON string
accelerator_type_instance = AcceleratorType.from_json(json)
# print the JSON string representation of the object
print(AcceleratorType.to_json())

# convert the object into a dict
accelerator_type_dict = accelerator_type_instance.to_dict()
# create an instance of AcceleratorType from a dict
accelerator_type_from_dict = AcceleratorType.from_dict(accelerator_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


