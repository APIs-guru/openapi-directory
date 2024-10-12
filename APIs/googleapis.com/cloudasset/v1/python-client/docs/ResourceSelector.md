# ResourceSelector

Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_resource_name** | **str** | Required. The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types). | [optional] 

## Example

```python
from openapi_client.models.resource_selector import ResourceSelector

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSelector from a JSON string
resource_selector_instance = ResourceSelector.from_json(json)
# print the JSON string representation of the object
print(ResourceSelector.to_json())

# convert the object into a dict
resource_selector_dict = resource_selector_instance.to_dict()
# create an instance of ResourceSelector from a dict
resource_selector_from_dict = ResourceSelector.from_dict(resource_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


