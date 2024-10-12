# PscConfig

PSC settings for a Cloud SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_consumer_projects** | **List[str]** | Optional. The list of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric). | [optional] 
**psc_enabled** | **bool** | Whether PSC connectivity is enabled for this instance. | [optional] 

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


