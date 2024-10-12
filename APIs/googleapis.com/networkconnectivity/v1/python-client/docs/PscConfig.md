# PscConfig

Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **str** | Optional. Max number of PSC connections for this policy. | [optional] 
**subnetworks** | **List[str]** | The resource paths of subnetworks to use for IP address management. Example: projects/{projectNumOrId}/regions/{region}/subnetworks/{resourceId}. | [optional] 

## Example

```python
from openapi_client.models.psc_config import PscConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PscConfig from a JSON string
psc_config_instance = PscConfig.from_json(json)
# print the JSON string representation of the object
print(PscConfig.to_json())

# convert the object into a dict
psc_config_dict = psc_config_instance.to_dict()
# create an instance of PscConfig from a dict
psc_config_from_dict = PscConfig.from_dict(psc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


