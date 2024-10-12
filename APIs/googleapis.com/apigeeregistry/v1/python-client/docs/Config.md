# Config

Available configurations to provision an Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmek_key_name** | **str** | Required. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of &#x60;projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)&#x60;, where the &#x60;location&#x60; must match InstanceConfig.location. | [optional] 
**location** | **str** | Output only. The GCP location where the Instance resides. | [optional] [readonly] 

## Example

```python
from openapi_client.models.config import Config

# TODO update the JSON string below
json = "{}"
# create an instance of Config from a JSON string
config_instance = Config.from_json(json)
# print the JSON string representation of the object
print(Config.to_json())

# convert the object into a dict
config_dict = config_instance.to_dict()
# create an instance of Config from a dict
config_from_dict = Config.from_dict(config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


