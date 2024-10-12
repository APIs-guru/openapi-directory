# RankSubmitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **str** | The priority for the keyword jobs submitted. High priority costs double credits. Default value is low. | [optional] 
**tasks** | [**List[KeywordJobRank]**](KeywordJobRank.md) | The keyword RANK jobs. Maximum 1000 jobs per a single request. | 

## Example

```python
from openapi_client.models.rank_submit_request import RankSubmitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RankSubmitRequest from a JSON string
rank_submit_request_instance = RankSubmitRequest.from_json(json)
# print the JSON string representation of the object
print(RankSubmitRequest.to_json())

# convert the object into a dict
rank_submit_request_dict = rank_submit_request_instance.to_dict()
# create an instance of RankSubmitRequest from a dict
rank_submit_request_from_dict = RankSubmitRequest.from_dict(rank_submit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


