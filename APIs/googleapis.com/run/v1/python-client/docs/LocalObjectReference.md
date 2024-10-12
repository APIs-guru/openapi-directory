# LocalObjectReference

Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the referent. | [optional] 

## Example

```python
from openapi_client.models.local_object_reference import LocalObjectReference

# TODO update the JSON string below
json = "{}"
# create an instance of LocalObjectReference from a JSON string
local_object_reference_instance = LocalObjectReference.from_json(json)
# print the JSON string representation of the object
print(LocalObjectReference.to_json())

# convert the object into a dict
local_object_reference_dict = local_object_reference_instance.to_dict()
# create an instance of LocalObjectReference from a dict
local_object_reference_from_dict = LocalObjectReference.from_dict(local_object_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


