# DeployedServiceType

The type of the deploye service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_name** | **str** |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 
**service_type_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_type import DeployedServiceType

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServiceType from a JSON string
deployed_service_type_instance = DeployedServiceType.from_json(json)
# print the JSON string representation of the object
print(DeployedServiceType.to_json())

# convert the object into a dict
deployed_service_type_dict = deployed_service_type_instance.to_dict()
# create an instance of DeployedServiceType from a dict
deployed_service_type_from_dict = DeployedServiceType.from_dict(deployed_service_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


