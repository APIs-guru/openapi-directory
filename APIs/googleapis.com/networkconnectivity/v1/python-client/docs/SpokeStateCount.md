# SpokeStateCount

The number of spokes that are in a particular state and associated with a given hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Output only. The total number of spokes that are in this state and associated with a given hub. | [optional] [readonly] 
**state** | **str** | Output only. The state of the spokes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spoke_state_count import SpokeStateCount

# TODO update the JSON string below
json = "{}"
# create an instance of SpokeStateCount from a JSON string
spoke_state_count_instance = SpokeStateCount.from_json(json)
# print the JSON string representation of the object
print(SpokeStateCount.to_json())

# convert the object into a dict
spoke_state_count_dict = spoke_state_count_instance.to_dict()
# create an instance of SpokeStateCount from a dict
spoke_state_count_from_dict = SpokeStateCount.from_dict(spoke_state_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


