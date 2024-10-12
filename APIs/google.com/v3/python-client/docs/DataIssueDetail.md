# DataIssueDetail

Details on a data issue in the listing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_issue_severity** | **str** | The severity of the data issue. | [optional] 
**data_issue_type** | **str** | The type of the data issue. | [optional] 
**is_self_resolving** | **bool** | Whether or not the issue is self-resolving. If true, the issue is expected to resolve itself. If false or not set, action is needed to resolve the issue. Refer to documentation on the data issue’s type for further information. | [optional] 

## Example

```python
from openapi_client.models.data_issue_detail import DataIssueDetail

# TODO update the JSON string below
json = "{}"
# create an instance of DataIssueDetail from a JSON string
data_issue_detail_instance = DataIssueDetail.from_json(json)
# print the JSON string representation of the object
print(DataIssueDetail.to_json())

# convert the object into a dict
data_issue_detail_dict = data_issue_detail_instance.to_dict()
# create an instance of DataIssueDetail from a dict
data_issue_detail_from_dict = DataIssueDetail.from_dict(data_issue_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


