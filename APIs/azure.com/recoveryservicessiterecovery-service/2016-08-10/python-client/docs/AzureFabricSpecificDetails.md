# AzureFabricSpecificDetails

Azure Fabric Specific Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_ids** | **List[str]** | The container Ids for the Azure fabric. | [optional] 
**location** | **str** | The Location for the Azure fabric. | [optional] 

## Example

```python
from openapi_client.models.azure_fabric_specific_details import AzureFabricSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFabricSpecificDetails from a JSON string
azure_fabric_specific_details_instance = AzureFabricSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(AzureFabricSpecificDetails.to_json())

# convert the object into a dict
azure_fabric_specific_details_dict = azure_fabric_specific_details_instance.to_dict()
# create an instance of AzureFabricSpecificDetails from a dict
azure_fabric_specific_details_from_dict = AzureFabricSpecificDetails.from_dict(azure_fabric_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


