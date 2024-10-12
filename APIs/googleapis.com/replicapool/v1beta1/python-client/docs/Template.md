# Template

The template used for creating replicas in the pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | [optional] 
**health_checks** | [**List[HealthCheck]**](HealthCheck.md) | A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool. | [optional] 
**version** | **str** | A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1. | [optional] 
**vm_params** | [**VmParams**](VmParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.template import Template

# TODO update the JSON string below
json = "{}"
# create an instance of Template from a JSON string
template_instance = Template.from_json(json)
# print the JSON string representation of the object
print(Template.to_json())

# convert the object into a dict
template_dict = template_instance.to_dict()
# create an instance of Template from a dict
template_from_dict = Template.from_dict(template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


