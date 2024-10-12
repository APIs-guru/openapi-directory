# CustomClass

A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used. | [optional] [readonly] 
**custom_class_id** | **str** | If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive. | [optional] 
**delete_time** | **str** | Output only. The time at which this resource was requested for deletion. This field is not used. | [optional] [readonly] 
**display_name** | **str** | Output only. User-settable, human-readable name for the CustomClass. Must be 63 characters or less. This field is not used. | [optional] [readonly] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time at which this resource will be purged. This field is not used. | [optional] [readonly] 
**items** | [**List[ClassItem]**](ClassItem.md) | A collection of class items. | [optional] 
**kms_key_name** | **str** | Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the content of the ClassItem is encrypted. The expected format is &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}&#x60;. | [optional] [readonly] 
**kms_key_version_name** | **str** | Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of the ClassItem is encrypted. The expected format is &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}&#x60;. | [optional] [readonly] 
**name** | **str** | The resource name of the custom class. | [optional] 
**reconciling** | **bool** | Output only. Whether or not this CustomClass is in the process of being updated. This field is not used. | [optional] [readonly] 
**state** | **str** | Output only. The CustomClass lifecycle state. This field is not used. | [optional] [readonly] 
**uid** | **str** | Output only. System-assigned unique identifier for the CustomClass. This field is not used. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_class import CustomClass

# TODO update the JSON string below
json = "{}"
# create an instance of CustomClass from a JSON string
custom_class_instance = CustomClass.from_json(json)
# print the JSON string representation of the object
print(CustomClass.to_json())

# convert the object into a dict
custom_class_dict = custom_class_instance.to_dict()
# create an instance of CustomClass from a dict
custom_class_from_dict = CustomClass.from_dict(custom_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


