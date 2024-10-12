# AvailabilitySetUpdate

Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AvailabilitySetProperties**](AvailabilitySetProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.availability_set_update import AvailabilitySetUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilitySetUpdate from a JSON string
availability_set_update_instance = AvailabilitySetUpdate.from_json(json)
# print the JSON string representation of the object
print(AvailabilitySetUpdate.to_json())

# convert the object into a dict
availability_set_update_dict = availability_set_update_instance.to_dict()
# create an instance of AvailabilitySetUpdate from a dict
availability_set_update_from_dict = AvailabilitySetUpdate.from_dict(availability_set_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


