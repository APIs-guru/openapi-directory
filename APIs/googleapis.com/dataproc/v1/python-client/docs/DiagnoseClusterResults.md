# DiagnoseClusterResults

The location of diagnostic output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri** | **str** | Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnose_cluster_results import DiagnoseClusterResults

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnoseClusterResults from a JSON string
diagnose_cluster_results_instance = DiagnoseClusterResults.from_json(json)
# print the JSON string representation of the object
print(DiagnoseClusterResults.to_json())

# convert the object into a dict
diagnose_cluster_results_dict = diagnose_cluster_results_instance.to_dict()
# create an instance of DiagnoseClusterResults from a dict
diagnose_cluster_results_from_dict = DiagnoseClusterResults.from_dict(diagnose_cluster_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


