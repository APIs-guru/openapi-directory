# OwnerReference

This is not supported or used by Cloud Run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | This is not supported or used by Cloud Run. | [optional] 
**block_owner_deletion** | **bool** | This is not supported or used by Cloud Run. | [optional] 
**controller** | **bool** | This is not supported or used by Cloud Run. | [optional] 
**kind** | **str** | This is not supported or used by Cloud Run. | [optional] 
**name** | **str** | This is not supported or used by Cloud Run. | [optional] 
**uid** | **str** | This is not supported or used by Cloud Run. | [optional] 

## Example

```python
from openapi_client.models.owner_reference import OwnerReference

# TODO update the JSON string below
json = "{}"
# create an instance of OwnerReference from a JSON string
owner_reference_instance = OwnerReference.from_json(json)
# print the JSON string representation of the object
print(OwnerReference.to_json())

# convert the object into a dict
owner_reference_dict = owner_reference_instance.to_dict()
# create an instance of OwnerReference from a dict
owner_reference_from_dict = OwnerReference.from_dict(owner_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


