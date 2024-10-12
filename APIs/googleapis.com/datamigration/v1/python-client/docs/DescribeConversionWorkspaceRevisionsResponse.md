# DescribeConversionWorkspaceRevisionsResponse

Response message for 'DescribeConversionWorkspaceRevisions' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revisions** | [**List[ConversionWorkspace]**](ConversionWorkspace.md) | The list of conversion workspace revisions. | [optional] 

## Example

```python
from openapi_client.models.describe_conversion_workspace_revisions_response import DescribeConversionWorkspaceRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DescribeConversionWorkspaceRevisionsResponse from a JSON string
describe_conversion_workspace_revisions_response_instance = DescribeConversionWorkspaceRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(DescribeConversionWorkspaceRevisionsResponse.to_json())

# convert the object into a dict
describe_conversion_workspace_revisions_response_dict = describe_conversion_workspace_revisions_response_instance.to_dict()
# create an instance of DescribeConversionWorkspaceRevisionsResponse from a dict
describe_conversion_workspace_revisions_response_from_dict = DescribeConversionWorkspaceRevisionsResponse.from_dict(describe_conversion_workspace_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


