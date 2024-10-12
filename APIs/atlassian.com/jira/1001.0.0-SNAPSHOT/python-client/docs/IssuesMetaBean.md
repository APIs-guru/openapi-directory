# IssuesMetaBean

Meta data describing the `issues` context variable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jql** | [**IssuesJqlMetaDataBean**](IssuesJqlMetaDataBean.md) |  | [optional] 

## Example

```python
from openapi_client.models.issues_meta_bean import IssuesMetaBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesMetaBean from a JSON string
issues_meta_bean_instance = IssuesMetaBean.from_json(json)
# print the JSON string representation of the object
print(IssuesMetaBean.to_json())

# convert the object into a dict
issues_meta_bean_dict = issues_meta_bean_instance.to_dict()
# create an instance of IssuesMetaBean from a dict
issues_meta_bean_from_dict = IssuesMetaBean.from_dict(issues_meta_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


