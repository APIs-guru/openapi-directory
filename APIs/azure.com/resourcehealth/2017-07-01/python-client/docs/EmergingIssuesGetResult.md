# EmergingIssuesGetResult

The Get EmergingIssues operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EmergingIssue**](EmergingIssue.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.emerging_issues_get_result import EmergingIssuesGetResult

# TODO update the JSON string below
json = "{}"
# create an instance of EmergingIssuesGetResult from a JSON string
emerging_issues_get_result_instance = EmergingIssuesGetResult.from_json(json)
# print the JSON string representation of the object
print(EmergingIssuesGetResult.to_json())

# convert the object into a dict
emerging_issues_get_result_dict = emerging_issues_get_result_instance.to_dict()
# create an instance of EmergingIssuesGetResult from a dict
emerging_issues_get_result_from_dict = EmergingIssuesGetResult.from_dict(emerging_issues_get_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


