# Vote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**feature_id** | **int** |  | [optional] 
**quantity** | **int** | A negative number indicates that the User has indicated \&quot;Not Interested\&quot; in a Features. Between 0 and 1000000 is the User&#39;s current prioritization of the Feature. | [optional] 
**updated_at** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.vote import Vote

# TODO update the JSON string below
json = "{}"
# create an instance of Vote from a JSON string
vote_instance = Vote.from_json(json)
# print the JSON string representation of the object
print(Vote.to_json())

# convert the object into a dict
vote_dict = vote_instance.to_dict()
# create an instance of Vote from a dict
vote_from_dict = Vote.from_dict(vote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


