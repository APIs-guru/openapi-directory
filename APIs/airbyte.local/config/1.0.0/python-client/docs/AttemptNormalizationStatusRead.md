# AttemptNormalizationStatusRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_number** | **int** |  | [optional] 
**has_normalization_failed** | **bool** |  | [optional] 
**has_records_committed** | **bool** |  | [optional] 
**records_committed** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.attempt_normalization_status_read import AttemptNormalizationStatusRead

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptNormalizationStatusRead from a JSON string
attempt_normalization_status_read_instance = AttemptNormalizationStatusRead.from_json(json)
# print the JSON string representation of the object
print(AttemptNormalizationStatusRead.to_json())

# convert the object into a dict
attempt_normalization_status_read_dict = attempt_normalization_status_read_instance.to_dict()
# create an instance of AttemptNormalizationStatusRead from a dict
attempt_normalization_status_read_from_dict = AttemptNormalizationStatusRead.from_dict(attempt_normalization_status_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


