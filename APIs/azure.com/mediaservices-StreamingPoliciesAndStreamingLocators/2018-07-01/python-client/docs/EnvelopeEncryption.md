# EnvelopeEncryption

Class for EnvelopeEncryption encryption scheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_tracks** | [**List[TrackSelection]**](TrackSelection.md) | Representing which tracks should not be encrypted | [optional] 
**content_keys** | [**StreamingPolicyContentKeys**](StreamingPolicyContentKeys.md) |  | [optional] 
**custom_key_acquisition_url_template** | **str** | Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested. | [optional] 
**enabled_protocols** | [**EnabledProtocols**](EnabledProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.envelope_encryption import EnvelopeEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of EnvelopeEncryption from a JSON string
envelope_encryption_instance = EnvelopeEncryption.from_json(json)
# print the JSON string representation of the object
print(EnvelopeEncryption.to_json())

# convert the object into a dict
envelope_encryption_dict = envelope_encryption_instance.to_dict()
# create an instance of EnvelopeEncryption from a dict
envelope_encryption_from_dict = EnvelopeEncryption.from_dict(envelope_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


