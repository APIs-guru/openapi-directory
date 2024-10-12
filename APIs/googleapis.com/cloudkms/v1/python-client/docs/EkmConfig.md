# EkmConfig

An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_ekm_connection** | **str** | Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default. | [optional] 
**name** | **str** | Output only. The resource name for the EkmConfig in the format &#x60;projects/*/locations/*/ekmConfig&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ekm_config import EkmConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EkmConfig from a JSON string
ekm_config_instance = EkmConfig.from_json(json)
# print the JSON string representation of the object
print(EkmConfig.to_json())

# convert the object into a dict
ekm_config_dict = ekm_config_instance.to_dict()
# create an instance of EkmConfig from a dict
ekm_config_from_dict = EkmConfig.from_dict(ekm_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


