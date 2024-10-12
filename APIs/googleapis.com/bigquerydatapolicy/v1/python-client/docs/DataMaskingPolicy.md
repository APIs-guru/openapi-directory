# DataMaskingPolicy

The data masking policy that is used to specify data masking rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predefined_expression** | **str** | A predefined masking expression. | [optional] 
**routine** | **str** | The name of the BigQuery routine that contains the custom masking routine, in the format of &#x60;projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.data_masking_policy import DataMaskingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingPolicy from a JSON string
data_masking_policy_instance = DataMaskingPolicy.from_json(json)
# print the JSON string representation of the object
print(DataMaskingPolicy.to_json())

# convert the object into a dict
data_masking_policy_dict = data_masking_policy_instance.to_dict()
# create an instance of DataMaskingPolicy from a dict
data_masking_policy_from_dict = DataMaskingPolicy.from_dict(data_masking_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


