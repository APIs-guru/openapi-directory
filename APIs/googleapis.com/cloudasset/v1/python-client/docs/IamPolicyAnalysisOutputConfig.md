# IamPolicyAnalysisOutputConfig

Output configuration for export IAM policy analysis destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudAssetV1BigQueryDestination**](GoogleCloudAssetV1BigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudAssetV1GcsDestination**](GoogleCloudAssetV1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.iam_policy_analysis_output_config import IamPolicyAnalysisOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicyAnalysisOutputConfig from a JSON string
iam_policy_analysis_output_config_instance = IamPolicyAnalysisOutputConfig.from_json(json)
# print the JSON string representation of the object
print(IamPolicyAnalysisOutputConfig.to_json())

# convert the object into a dict
iam_policy_analysis_output_config_dict = iam_policy_analysis_output_config_instance.to_dict()
# create an instance of IamPolicyAnalysisOutputConfig from a dict
iam_policy_analysis_output_config_from_dict = IamPolicyAnalysisOutputConfig.from_dict(iam_policy_analysis_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


