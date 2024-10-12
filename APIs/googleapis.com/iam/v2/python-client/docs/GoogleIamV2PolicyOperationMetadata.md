# GoogleIamV2PolicyOperationMetadata

Metadata for long-running `Policy` operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when the &#x60;google.longrunning.Operation&#x60; was created. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v2_policy_operation_metadata import GoogleIamV2PolicyOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2PolicyOperationMetadata from a JSON string
google_iam_v2_policy_operation_metadata_instance = GoogleIamV2PolicyOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2PolicyOperationMetadata.to_json())

# convert the object into a dict
google_iam_v2_policy_operation_metadata_dict = google_iam_v2_policy_operation_metadata_instance.to_dict()
# create an instance of GoogleIamV2PolicyOperationMetadata from a dict
google_iam_v2_policy_operation_metadata_from_dict = GoogleIamV2PolicyOperationMetadata.from_dict(google_iam_v2_policy_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


