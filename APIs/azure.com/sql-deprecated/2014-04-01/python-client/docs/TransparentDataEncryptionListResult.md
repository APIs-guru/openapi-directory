# TransparentDataEncryptionListResult

Represents the response to a list transparent data encryption configurations request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TransparentDataEncryptionListResultValueInner]**](TransparentDataEncryptionListResultValueInner.md) | The list of transparent data encryption configurations. | [optional] 

## Example

```python
from openapi_client.models.transparent_data_encryption_list_result import TransparentDataEncryptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionListResult from a JSON string
transparent_data_encryption_list_result_instance = TransparentDataEncryptionListResult.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionListResult.to_json())

# convert the object into a dict
transparent_data_encryption_list_result_dict = transparent_data_encryption_list_result_instance.to_dict()
# create an instance of TransparentDataEncryptionListResult from a dict
transparent_data_encryption_list_result_from_dict = TransparentDataEncryptionListResult.from_dict(transparent_data_encryption_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


