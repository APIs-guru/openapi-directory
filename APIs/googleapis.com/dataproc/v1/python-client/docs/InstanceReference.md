# InstanceReference

A reference to a Compute Engine instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | The unique identifier of the Compute Engine instance. | [optional] 
**instance_name** | **str** | The user-friendly name of the Compute Engine instance. | [optional] 
**public_ecies_key** | **str** | The public ECIES key used for sharing data with this instance. | [optional] 
**public_key** | **str** | The public RSA key used for sharing data with this instance. | [optional] 

## Example

```python
from openapi_client.models.instance_reference import InstanceReference

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceReference from a JSON string
instance_reference_instance = InstanceReference.from_json(json)
# print the JSON string representation of the object
print(InstanceReference.to_json())

# convert the object into a dict
instance_reference_dict = instance_reference_instance.to_dict()
# create an instance of InstanceReference from a dict
instance_reference_from_dict = InstanceReference.from_dict(instance_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


