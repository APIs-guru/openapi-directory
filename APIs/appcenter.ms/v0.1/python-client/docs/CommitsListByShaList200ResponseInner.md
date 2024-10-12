# CommitsListByShaList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha** | **str** | The commit SHA | [optional] 
**url** | **str** | The URL to the commit | [optional] 
**commit** | [**CommitsListByShaList200ResponseInnerAllOfCommit**](CommitsListByShaList200ResponseInnerAllOfCommit.md) |  | [optional] 

## Example

```python
from openapi_client.models.commits_list_by_sha_list200_response_inner import CommitsListByShaList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CommitsListByShaList200ResponseInner from a JSON string
commits_list_by_sha_list200_response_inner_instance = CommitsListByShaList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CommitsListByShaList200ResponseInner.to_json())

# convert the object into a dict
commits_list_by_sha_list200_response_inner_dict = commits_list_by_sha_list200_response_inner_instance.to_dict()
# create an instance of CommitsListByShaList200ResponseInner from a dict
commits_list_by_sha_list200_response_inner_from_dict = CommitsListByShaList200ResponseInner.from_dict(commits_list_by_sha_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


