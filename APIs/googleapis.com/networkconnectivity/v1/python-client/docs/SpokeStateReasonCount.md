# SpokeStateReasonCount

The number of spokes in the hub that are inactive for this reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Output only. The total number of spokes that are inactive for a particular reason and associated with a given hub. | [optional] [readonly] 
**state_reason_code** | **str** | Output only. The reason that a spoke is inactive. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spoke_state_reason_count import SpokeStateReasonCount

# TODO update the JSON string below
json = "{}"
# create an instance of SpokeStateReasonCount from a JSON string
spoke_state_reason_count_instance = SpokeStateReasonCount.from_json(json)
# print the JSON string representation of the object
print(SpokeStateReasonCount.to_json())

# convert the object into a dict
spoke_state_reason_count_dict = spoke_state_reason_count_instance.to_dict()
# create an instance of SpokeStateReasonCount from a dict
spoke_state_reason_count_from_dict = SpokeStateReasonCount.from_dict(spoke_state_reason_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


