# CmekConfig

Describes the customer-managed encryption key (CMEK) configuration associated with a project and location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key** | **str** | Resource name of the Cloud KMS key, of the form &#x60;projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID&#x60;, that will be used to encrypt the Queues &amp; Tasks in the region. Setting this as blank will turn off CMEK encryption. | [optional] 
**name** | **str** | Output only. The config resource name which includes the project and location and must end in &#39;cmekConfig&#39;, in the format projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.cmek_config import CmekConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CmekConfig from a JSON string
cmek_config_instance = CmekConfig.from_json(json)
# print the JSON string representation of the object
print(CmekConfig.to_json())

# convert the object into a dict
cmek_config_dict = cmek_config_instance.to_dict()
# create an instance of CmekConfig from a dict
cmek_config_from_dict = CmekConfig.from_dict(cmek_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


