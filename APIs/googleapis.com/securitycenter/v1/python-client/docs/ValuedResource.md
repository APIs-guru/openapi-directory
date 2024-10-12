# ValuedResource

A resource that is determined to have value to a user's system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Human-readable name of the valued resource. | [optional] 
**exposed_score** | **float** | Exposed score for this valued resource. A value of 0 means no exposure was detected exposure. | [optional] 
**name** | **str** | Valued resource name, for example, e.g.: &#x60;organizations/123/simulations/456/valuedResources/789&#x60; | [optional] 
**resource** | **str** | The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the valued resource. | [optional] 
**resource_type** | **str** | The [resource type](https://cloud.google.com/asset-inventory/docs/supported-asset-types) of the valued resource. | [optional] 
**resource_value** | **str** | How valuable this resource is. | [optional] 
**resource_value_configs_used** | [**List[ResourceValueConfigMetadata]**](ResourceValueConfigMetadata.md) | List of resource value configurations&#39; metadata used to determine the value of this resource. Maximum of 100. | [optional] 

## Example

```python
from openapi_client.models.valued_resource import ValuedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ValuedResource from a JSON string
valued_resource_instance = ValuedResource.from_json(json)
# print the JSON string representation of the object
print(ValuedResource.to_json())

# convert the object into a dict
valued_resource_dict = valued_resource_instance.to_dict()
# create an instance of ValuedResource from a dict
valued_resource_from_dict = ValuedResource.from_dict(valued_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


