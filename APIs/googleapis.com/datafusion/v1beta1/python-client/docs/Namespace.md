# Namespace

Represents the information of a namespace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam_policy** | [**IAMPolicy**](IAMPolicy.md) |  | [optional] 
**name** | **str** | Name of the given namespace. | [optional] 

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


