# DeployedCodePackage

The package of the deployed code

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_setup_entry_point** | **bool** |  | [optional] 
**main_entry_point** | [**EntryPoint**](EntryPoint.md) |  | [optional] 
**name** | **str** |  | [optional] 
**run_frequency_interval** | **str** |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 
**setup_entry_point** | [**EntryPoint**](EntryPoint.md) |  | [optional] 
**status** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_code_package import DeployedCodePackage

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedCodePackage from a JSON string
deployed_code_package_instance = DeployedCodePackage.from_json(json)
# print the JSON string representation of the object
print(DeployedCodePackage.to_json())

# convert the object into a dict
deployed_code_package_dict = deployed_code_package_instance.to_dict()
# create an instance of DeployedCodePackage from a dict
deployed_code_package_from_dict = DeployedCodePackage.from_dict(deployed_code_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


