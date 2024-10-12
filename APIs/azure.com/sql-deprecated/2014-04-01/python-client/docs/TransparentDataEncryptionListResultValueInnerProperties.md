# TransparentDataEncryptionListResultValueInnerProperties

Represents the properties of a database transparent data encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the database transparent data encryption. | [optional] 

## Example

```python
from openapi_client.models.transparent_data_encryption_list_result_value_inner_properties import TransparentDataEncryptionListResultValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionListResultValueInnerProperties from a JSON string
transparent_data_encryption_list_result_value_inner_properties_instance = TransparentDataEncryptionListResultValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionListResultValueInnerProperties.to_json())

# convert the object into a dict
transparent_data_encryption_list_result_value_inner_properties_dict = transparent_data_encryption_list_result_value_inner_properties_instance.to_dict()
# create an instance of TransparentDataEncryptionListResultValueInnerProperties from a dict
transparent_data_encryption_list_result_value_inner_properties_from_dict = TransparentDataEncryptionListResultValueInnerProperties.from_dict(transparent_data_encryption_list_result_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


