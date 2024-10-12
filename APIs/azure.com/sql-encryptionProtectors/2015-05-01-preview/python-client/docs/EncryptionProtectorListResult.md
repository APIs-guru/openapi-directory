# EncryptionProtectorListResult

A list of server encryption protectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[EncryptionProtector]**](EncryptionProtector.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_protector_list_result import EncryptionProtectorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionProtectorListResult from a JSON string
encryption_protector_list_result_instance = EncryptionProtectorListResult.from_json(json)
# print the JSON string representation of the object
print(EncryptionProtectorListResult.to_json())

# convert the object into a dict
encryption_protector_list_result_dict = encryption_protector_list_result_instance.to_dict()
# create an instance of EncryptionProtectorListResult from a dict
encryption_protector_list_result_from_dict = EncryptionProtectorListResult.from_dict(encryption_protector_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


