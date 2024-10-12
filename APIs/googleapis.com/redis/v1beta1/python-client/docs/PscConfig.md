# PscConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Required. The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network_project}/global/networks/{network_id}. | [optional] 

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


