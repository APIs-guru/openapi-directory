# TransparentDataEncryptionActivityListResult

Represents the response to a list database transparent data encryption activity request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TransparentDataEncryptionActivity]**](TransparentDataEncryptionActivity.md) | The list of database transparent data encryption activities. | 

## Example

```python
from openapi_client.models.transparent_data_encryption_activity_list_result import TransparentDataEncryptionActivityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionActivityListResult from a JSON string
transparent_data_encryption_activity_list_result_instance = TransparentDataEncryptionActivityListResult.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionActivityListResult.to_json())

# convert the object into a dict
transparent_data_encryption_activity_list_result_dict = transparent_data_encryption_activity_list_result_instance.to_dict()
# create an instance of TransparentDataEncryptionActivityListResult from a dict
transparent_data_encryption_activity_list_result_from_dict = TransparentDataEncryptionActivityListResult.from_dict(transparent_data_encryption_activity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


