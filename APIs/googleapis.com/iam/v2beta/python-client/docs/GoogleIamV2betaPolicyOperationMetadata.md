# GoogleIamV2betaPolicyOperationMetadata

Metadata for long-running `Policy` operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when the &#x60;google.longrunning.Operation&#x60; was created. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v2beta_policy_operation_metadata import GoogleIamV2betaPolicyOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2betaPolicyOperationMetadata from a JSON string
google_iam_v2beta_policy_operation_metadata_instance = GoogleIamV2betaPolicyOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2betaPolicyOperationMetadata.to_json())

# convert the object into a dict
google_iam_v2beta_policy_operation_metadata_dict = google_iam_v2beta_policy_operation_metadata_instance.to_dict()
# create an instance of GoogleIamV2betaPolicyOperationMetadata from a dict
google_iam_v2beta_policy_operation_metadata_from_dict = GoogleIamV2betaPolicyOperationMetadata.from_dict(google_iam_v2beta_policy_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


