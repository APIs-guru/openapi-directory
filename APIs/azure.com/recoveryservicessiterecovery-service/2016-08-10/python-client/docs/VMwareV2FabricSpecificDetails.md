# VMwareV2FabricSpecificDetails

VMwareV2 fabric Specific Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rcm_service_endpoint** | **str** | The endpoint for making requests to the RCM Service. | [optional] 
**srs_service_endpoint** | **str** | The endpoint for making requests to the SRS Service. | [optional] 

## Example

```python
from openapi_client.models.v_mware_v2_fabric_specific_details import VMwareV2FabricSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareV2FabricSpecificDetails from a JSON string
v_mware_v2_fabric_specific_details_instance = VMwareV2FabricSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareV2FabricSpecificDetails.to_json())

# convert the object into a dict
v_mware_v2_fabric_specific_details_dict = v_mware_v2_fabric_specific_details_instance.to_dict()
# create an instance of VMwareV2FabricSpecificDetails from a dict
v_mware_v2_fabric_specific_details_from_dict = VMwareV2FabricSpecificDetails.from_dict(v_mware_v2_fabric_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


