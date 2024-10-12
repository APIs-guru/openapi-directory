# InstanceTemplateSpec

InstanceTemplateSpec describes the data an instance should have when created from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec** | [**InstanceSpec**](InstanceSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance_template_spec import InstanceTemplateSpec

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceTemplateSpec from a JSON string
instance_template_spec_instance = InstanceTemplateSpec.from_json(json)
# print the JSON string representation of the object
print(InstanceTemplateSpec.to_json())

# convert the object into a dict
instance_template_spec_dict = instance_template_spec_instance.to_dict()
# create an instance of InstanceTemplateSpec from a dict
instance_template_spec_from_dict = InstanceTemplateSpec.from_dict(instance_template_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


