# CustomBiddingAlgorithmRules

A single custom bidding algorithm rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Output only. Whether the rules resource is currently being used for scoring by the parent algorithm. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the rules resource was created. | [optional] [readonly] 
**custom_bidding_algorithm_id** | **str** | Output only. The unique ID of the custom bidding algorithm that the rules resource belongs to. | [optional] [readonly] 
**custom_bidding_algorithm_rules_id** | **str** | Output only. The unique ID of the rules resource. | [optional] [readonly] 
**error** | [**CustomBiddingAlgorithmRulesError**](CustomBiddingAlgorithmRulesError.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the rules resource. | [optional] [readonly] 
**rules** | [**CustomBiddingAlgorithmRulesRef**](CustomBiddingAlgorithmRulesRef.md) |  | [optional] 
**state** | **str** | Output only. The state of the rules resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_bidding_algorithm_rules import CustomBiddingAlgorithmRules

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingAlgorithmRules from a JSON string
custom_bidding_algorithm_rules_instance = CustomBiddingAlgorithmRules.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingAlgorithmRules.to_json())

# convert the object into a dict
custom_bidding_algorithm_rules_dict = custom_bidding_algorithm_rules_instance.to_dict()
# create an instance of CustomBiddingAlgorithmRules from a dict
custom_bidding_algorithm_rules_from_dict = CustomBiddingAlgorithmRules.from_dict(custom_bidding_algorithm_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


