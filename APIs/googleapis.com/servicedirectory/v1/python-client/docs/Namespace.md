# Namespace

A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters. | [optional] 
**name** | **str** | Immutable. The resource name for the namespace in the format &#x60;projects/*/locations/*/namespaces/*&#x60;. | [optional] 
**uid** | **str** | Output only. The globally unique identifier of the namespace in the UUID4 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.namespace import Namespace

# TODO update the JSON string below
json = "{}"
# create an instance of Namespace from a JSON string
namespace_instance = Namespace.from_json(json)
# print the JSON string representation of the object
print(Namespace.to_json())

# convert the object into a dict
namespace_dict = namespace_instance.to_dict()
# create an instance of Namespace from a dict
namespace_from_dict = Namespace.from_dict(namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


