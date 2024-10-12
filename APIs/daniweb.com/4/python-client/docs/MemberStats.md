# MemberStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answered_count** | **float** |  | [optional] 
**endorsements_count** | **float** |  | [optional] 
**posts_count** | **float** |  | [optional] 
**reputation_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.member_stats import MemberStats

# TODO update the JSON string below
json = "{}"
# create an instance of MemberStats from a JSON string
member_stats_instance = MemberStats.from_json(json)
# print the JSON string representation of the object
print(MemberStats.to_json())

# convert the object into a dict
member_stats_dict = member_stats_instance.to_dict()
# create an instance of MemberStats from a dict
member_stats_from_dict = MemberStats.from_dict(member_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


