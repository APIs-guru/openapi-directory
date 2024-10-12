# CommitDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha** | **str** | The commit SHA | [optional] 
**url** | **str** | The URL to the commit | [optional] 
**commit** | [**CommitsListByShaList200ResponseInnerAllOfCommit**](CommitsListByShaList200ResponseInnerAllOfCommit.md) |  | [optional] 

## Example

```python
from openapi_client.models.commit_details import CommitDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CommitDetails from a JSON string
commit_details_instance = CommitDetails.from_json(json)
# print the JSON string representation of the object
print(CommitDetails.to_json())

# convert the object into a dict
commit_details_dict = commit_details_instance.to_dict()
# create an instance of CommitDetails from a dict
commit_details_from_dict = CommitDetails.from_dict(commit_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


