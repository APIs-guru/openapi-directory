# GoogleChannelConfig

A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region. Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key_name** | **str** | Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. | [optional] 
**name** | **str** | Required. The resource name of the config. Must be in the format of, &#x60;projects/{project}/locations/{location}/googleChannelConfig&#x60;. | [optional] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_channel_config import GoogleChannelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChannelConfig from a JSON string
google_channel_config_instance = GoogleChannelConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleChannelConfig.to_json())

# convert the object into a dict
google_channel_config_dict = google_channel_config_instance.to_dict()
# create an instance of GoogleChannelConfig from a dict
google_channel_config_from_dict = GoogleChannelConfig.from_dict(google_channel_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


