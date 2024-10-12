# CustomBiddingAlgorithmRulesError

An error message for a CustomBiddingAlgorithmRules resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The type of error. | [optional] 

## Example

```python
from openapi_client.models.custom_bidding_algorithm_rules_error import CustomBiddingAlgorithmRulesError

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingAlgorithmRulesError from a JSON string
custom_bidding_algorithm_rules_error_instance = CustomBiddingAlgorithmRulesError.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingAlgorithmRulesError.to_json())

# convert the object into a dict
custom_bidding_algorithm_rules_error_dict = custom_bidding_algorithm_rules_error_instance.to_dict()
# create an instance of CustomBiddingAlgorithmRulesError from a dict
custom_bidding_algorithm_rules_error_from_dict = CustomBiddingAlgorithmRulesError.from_dict(custom_bidding_algorithm_rules_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


