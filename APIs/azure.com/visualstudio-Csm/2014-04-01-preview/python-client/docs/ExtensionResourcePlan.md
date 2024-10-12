# ExtensionResourcePlan

Plan data for an extension resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the plan. | [optional] 
**product** | **str** | Product name. | [optional] 
**promotion_code** | **str** | Optional: the promotion code associated with the plan. | [optional] 
**publisher** | **str** | Name of the extension publisher. | [optional] 
**version** | **str** | A string that uniquely identifies the plan version. | [optional] 

## Example

```python
from openapi_client.models.extension_resource_plan import ExtensionResourcePlan

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionResourcePlan from a JSON string
extension_resource_plan_instance = ExtensionResourcePlan.from_json(json)
# print the JSON string representation of the object
print(ExtensionResourcePlan.to_json())

# convert the object into a dict
extension_resource_plan_dict = extension_resource_plan_instance.to_dict()
# create an instance of ExtensionResourcePlan from a dict
extension_resource_plan_from_dict = ExtensionResourcePlan.from_dict(extension_resource_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


