# AnalyzeIamPolicyLongrunningMetadata

Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.analyze_iam_policy_longrunning_metadata import AnalyzeIamPolicyLongrunningMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeIamPolicyLongrunningMetadata from a JSON string
analyze_iam_policy_longrunning_metadata_instance = AnalyzeIamPolicyLongrunningMetadata.from_json(json)
# print the JSON string representation of the object
print(AnalyzeIamPolicyLongrunningMetadata.to_json())

# convert the object into a dict
analyze_iam_policy_longrunning_metadata_dict = analyze_iam_policy_longrunning_metadata_instance.to_dict()
# create an instance of AnalyzeIamPolicyLongrunningMetadata from a dict
analyze_iam_policy_longrunning_metadata_from_dict = AnalyzeIamPolicyLongrunningMetadata.from_dict(analyze_iam_policy_longrunning_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


