# FeatureVote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_id** | **str** |  | [optional] 
**quantity** | **int** | Value between -1 and 1000000. -1 indicates that the User is \&quot;Not Interested\&quot; in the feature. | [optional] 

## Example

```python
from openapi_client.models.feature_vote import FeatureVote

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureVote from a JSON string
feature_vote_instance = FeatureVote.from_json(json)
# print the JSON string representation of the object
print(FeatureVote.to_json())

# convert the object into a dict
feature_vote_dict = feature_vote_instance.to_dict()
# create an instance of FeatureVote from a dict
feature_vote_from_dict = FeatureVote.from_dict(feature_vote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


