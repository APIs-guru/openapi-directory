# InfoTypeTransformation

A transformation to apply to text that is identified as a specific info_type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_mask_config** | [**CharacterMaskConfig**](CharacterMaskConfig.md) |  | [optional] 
**crypto_hash_config** | [**CryptoHashConfig**](CryptoHashConfig.md) |  | [optional] 
**date_shift_config** | [**DateShiftConfig**](DateShiftConfig.md) |  | [optional] 
**info_types** | **List[str]** | &#x60;InfoTypes&#x60; to apply this transformation to. If this is not specified, this transformation becomes the default transformation, and is used for any &#x60;info_type&#x60; that is not specified in another transformation. | [optional] 
**redact_config** | **object** | Define how to redact sensitive values. Default behaviour is erase. For example, \&quot;My name is Jane.\&quot; becomes \&quot;My name is .\&quot; | [optional] 
**replace_with_info_type_config** | **object** | When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, \&quot;My name is Jane\&quot; becomes \&quot;My name is [PERSON_NAME].\&quot; The TRANSFORM action is equivalent to redacting. | [optional] 

## Example

```python
from openapi_client.models.info_type_transformation import InfoTypeTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of InfoTypeTransformation from a JSON string
info_type_transformation_instance = InfoTypeTransformation.from_json(json)
# print the JSON string representation of the object
print(InfoTypeTransformation.to_json())

# convert the object into a dict
info_type_transformation_dict = info_type_transformation_instance.to_dict()
# create an instance of InfoTypeTransformation from a dict
info_type_transformation_from_dict = InfoTypeTransformation.from_dict(info_type_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


