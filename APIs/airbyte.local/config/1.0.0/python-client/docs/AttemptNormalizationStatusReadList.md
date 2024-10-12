# AttemptNormalizationStatusReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_normalization_statuses** | [**List[AttemptNormalizationStatusRead]**](AttemptNormalizationStatusRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.attempt_normalization_status_read_list import AttemptNormalizationStatusReadList

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptNormalizationStatusReadList from a JSON string
attempt_normalization_status_read_list_instance = AttemptNormalizationStatusReadList.from_json(json)
# print the JSON string representation of the object
print(AttemptNormalizationStatusReadList.to_json())

# convert the object into a dict
attempt_normalization_status_read_list_dict = attempt_normalization_status_read_list_instance.to_dict()
# create an instance of AttemptNormalizationStatusReadList from a dict
attempt_normalization_status_read_list_from_dict = AttemptNormalizationStatusReadList.from_dict(attempt_normalization_status_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


