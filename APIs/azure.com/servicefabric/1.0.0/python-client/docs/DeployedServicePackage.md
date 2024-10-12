# DeployedServicePackage

The package of the deployed service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package import DeployedServicePackage

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackage from a JSON string
deployed_service_package_instance = DeployedServicePackage.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackage.to_json())

# convert the object into a dict
deployed_service_package_dict = deployed_service_package_instance.to_dict()
# create an instance of DeployedServicePackage from a dict
deployed_service_package_from_dict = DeployedServicePackage.from_dict(deployed_service_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


