# StreamingPolicyProperties

Class to specify properties of Streaming Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_encryption_cbcs** | [**CommonEncryptionCbcs**](CommonEncryptionCbcs.md) |  | [optional] 
**common_encryption_cenc** | [**CommonEncryptionCenc**](CommonEncryptionCenc.md) |  | [optional] 
**created** | **datetime** | Creation time of Streaming Policy | [optional] [readonly] 
**default_content_key_policy_name** | **str** | Default ContentKey used by current Streaming Policy | [optional] 
**envelope_encryption** | [**EnvelopeEncryption**](EnvelopeEncryption.md) |  | [optional] 
**no_encryption** | [**NoEncryption**](NoEncryption.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_policy_properties import StreamingPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPolicyProperties from a JSON string
streaming_policy_properties_instance = StreamingPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(StreamingPolicyProperties.to_json())

# convert the object into a dict
streaming_policy_properties_dict = streaming_policy_properties_instance.to_dict()
# create an instance of StreamingPolicyProperties from a dict
streaming_policy_properties_from_dict = StreamingPolicyProperties.from_dict(streaming_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


