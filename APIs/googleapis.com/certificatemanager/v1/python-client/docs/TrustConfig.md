# TrustConfig

Defines a trust config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of a TrustConfig. | [optional] [readonly] 
**description** | **str** | One or more paragraphs of text description of a TrustConfig. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Set of labels associated with a TrustConfig. | [optional] 
**name** | **str** | A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern &#x60;projects/*/locations/*/trustConfigs/*&#x60;. | [optional] 
**trust_stores** | [**List[TrustStore]**](TrustStore.md) | Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a TrustConfig. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trust_config import TrustConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TrustConfig from a JSON string
trust_config_instance = TrustConfig.from_json(json)
# print the JSON string representation of the object
print(TrustConfig.to_json())

# convert the object into a dict
trust_config_dict = trust_config_instance.to_dict()
# create an instance of TrustConfig from a dict
trust_config_from_dict = TrustConfig.from_dict(trust_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


