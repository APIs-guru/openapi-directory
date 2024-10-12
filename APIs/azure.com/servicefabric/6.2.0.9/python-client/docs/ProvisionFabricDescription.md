# ProvisionFabricDescription

Describes the parameters for provisioning a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_manifest_file_path** | **str** | The cluster manifest file path. | [optional] 
**code_file_path** | **str** | The cluster code package file path. | [optional] 

## Example

```python
from openapi_client.models.provision_fabric_description import ProvisionFabricDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionFabricDescription from a JSON string
provision_fabric_description_instance = ProvisionFabricDescription.from_json(json)
# print the JSON string representation of the object
print(ProvisionFabricDescription.to_json())

# convert the object into a dict
provision_fabric_description_dict = provision_fabric_description_instance.to_dict()
# create an instance of ProvisionFabricDescription from a dict
provision_fabric_description_from_dict = ProvisionFabricDescription.from_dict(provision_fabric_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


