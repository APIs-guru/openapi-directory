# UnprovisionFabricDescription

Describes the parameters for unprovisioning a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** | The cluster code package version. | [optional] 
**config_version** | **str** | The cluster manifest version. | [optional] 

## Example

```python
from openapi_client.models.unprovision_fabric_description import UnprovisionFabricDescription

# TODO update the JSON string below
json = "{}"
# create an instance of UnprovisionFabricDescription from a JSON string
unprovision_fabric_description_instance = UnprovisionFabricDescription.from_json(json)
# print the JSON string representation of the object
print(UnprovisionFabricDescription.to_json())

# convert the object into a dict
unprovision_fabric_description_dict = unprovision_fabric_description_instance.to_dict()
# create an instance of UnprovisionFabricDescription from a dict
unprovision_fabric_description_from_dict = UnprovisionFabricDescription.from_dict(unprovision_fabric_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


