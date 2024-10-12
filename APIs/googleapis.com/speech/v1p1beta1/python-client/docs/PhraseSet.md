# PhraseSet

Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used. | [optional] [readonly] 
**boost** | **float** | Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though &#x60;boost&#x60; can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests. | [optional] 
**delete_time** | **str** | Output only. The time at which this resource was requested for deletion. This field is not used. | [optional] [readonly] 
**display_name** | **str** | Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or less. This field is not used. | [optional] [readonly] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time at which this resource will be purged. This field is not used. | [optional] [readonly] 
**kms_key_name** | **str** | Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the content of the PhraseSet is encrypted. The expected format is &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}&#x60;. | [optional] [readonly] 
**kms_key_version_name** | **str** | Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of the PhraseSet is encrypted. The expected format is &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}&#x60;. | [optional] [readonly] 
**name** | **str** | The resource name of the phrase set. | [optional] 
**phrases** | [**List[Phrase]**](Phrase.md) | A list of word and phrases. | [optional] 
**reconciling** | **bool** | Output only. Whether or not this PhraseSet is in the process of being updated. This field is not used. | [optional] [readonly] 
**state** | **str** | Output only. The CustomClass lifecycle state. This field is not used. | [optional] [readonly] 
**uid** | **str** | Output only. System-assigned unique identifier for the PhraseSet. This field is not used. | [optional] [readonly] 

## Example

```python
from openapi_client.models.phrase_set import PhraseSet

# TODO update the JSON string below
json = "{}"
# create an instance of PhraseSet from a JSON string
phrase_set_instance = PhraseSet.from_json(json)
# print the JSON string representation of the object
print(PhraseSet.to_json())

# convert the object into a dict
phrase_set_dict = phrase_set_instance.to_dict()
# create an instance of PhraseSet from a dict
phrase_set_from_dict = PhraseSet.from_dict(phrase_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


