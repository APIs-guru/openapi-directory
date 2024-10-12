# Namespace

An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace_name** | **str** | Resource name of this namespace. Namespaces names have the format: namespaces/namespace. | [optional] 
**serving_visibility** | **str** | Specifies what clients may receive attachments under this namespace via &#x60;beaconinfo.getforobserved&#x60;. | [optional] 

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


