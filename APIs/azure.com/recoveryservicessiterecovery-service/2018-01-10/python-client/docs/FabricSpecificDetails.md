# FabricSpecificDetails

Fabric specific details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. Overridden in derived classes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.fabric_specific_details import FabricSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FabricSpecificDetails from a JSON string
fabric_specific_details_instance = FabricSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(FabricSpecificDetails.to_json())

# convert the object into a dict
fabric_specific_details_dict = fabric_specific_details_instance.to_dict()
# create an instance of FabricSpecificDetails from a dict
fabric_specific_details_from_dict = FabricSpecificDetails.from_dict(fabric_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


