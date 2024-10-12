# RankCollectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[RankCollectResponseTasksInner]**](RankCollectResponseTasksInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.rank_collect_response import RankCollectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RankCollectResponse from a JSON string
rank_collect_response_instance = RankCollectResponse.from_json(json)
# print the JSON string representation of the object
print(RankCollectResponse.to_json())

# convert the object into a dict
rank_collect_response_dict = rank_collect_response_instance.to_dict()
# create an instance of RankCollectResponse from a dict
rank_collect_response_from_dict = RankCollectResponse.from_dict(rank_collect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


