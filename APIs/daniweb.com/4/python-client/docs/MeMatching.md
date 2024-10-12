# MeMatching


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goals** | **List[str]** |  | [optional] 
**interest_tags** | **List[str]** |  | [optional] 
**location_importance** | **str** |  | [optional] 
**targeted_industry** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.me_matching import MeMatching

# TODO update the JSON string below
json = "{}"
# create an instance of MeMatching from a JSON string
me_matching_instance = MeMatching.from_json(json)
# print the JSON string representation of the object
print(MeMatching.to_json())

# convert the object into a dict
me_matching_dict = me_matching_instance.to_dict()
# create an instance of MeMatching from a dict
me_matching_from_dict = MeMatching.from_dict(me_matching_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


