# CommitDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_date** | **datetime** |  | [optional] 
**author_email** | **str** |  | [optional] 
**author_login** | **str** |  | [optional] 
**author_name** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**commit** | **str** |  | [optional] 
**commit_url** | **str** |  | [optional] 
**committer_date** | **datetime** |  | [optional] 
**committer_email** | **str** |  | [optional] 
**committer_login** | **str** |  | [optional] 
**committer_name** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.commit_detail import CommitDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CommitDetail from a JSON string
commit_detail_instance = CommitDetail.from_json(json)
# print the JSON string representation of the object
print(CommitDetail.to_json())

# convert the object into a dict
commit_detail_dict = commit_detail_instance.to_dict()
# create an instance of CommitDetail from a dict
commit_detail_from_dict = CommitDetail.from_dict(commit_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


