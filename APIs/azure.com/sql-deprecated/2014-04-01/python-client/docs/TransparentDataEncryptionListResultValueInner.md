# TransparentDataEncryptionListResultValueInner

Represents a database transparent data encryption configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**TransparentDataEncryptionListResultValueInnerProperties**](TransparentDataEncryptionListResultValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.transparent_data_encryption_list_result_value_inner import TransparentDataEncryptionListResultValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionListResultValueInner from a JSON string
transparent_data_encryption_list_result_value_inner_instance = TransparentDataEncryptionListResultValueInner.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionListResultValueInner.to_json())

# convert the object into a dict
transparent_data_encryption_list_result_value_inner_dict = transparent_data_encryption_list_result_value_inner_instance.to_dict()
# create an instance of TransparentDataEncryptionListResultValueInner from a dict
transparent_data_encryption_list_result_value_inner_from_dict = TransparentDataEncryptionListResultValueInner.from_dict(transparent_data_encryption_list_result_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


