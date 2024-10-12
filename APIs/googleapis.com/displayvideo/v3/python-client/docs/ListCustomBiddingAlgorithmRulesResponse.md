# ListCustomBiddingAlgorithmRulesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_bidding_rules** | [**List[CustomBiddingAlgorithmRules]**](CustomBiddingAlgorithmRules.md) | The list of CustomBiddingAlgorithmRules resources. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListCustomBiddingAlgorithmRulesRequest&#x60; method to retrieve the next page of results. If this field is null, it means this is the last page. | [optional] 

## Example

```python
from openapi_client.models.list_custom_bidding_algorithm_rules_response import ListCustomBiddingAlgorithmRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomBiddingAlgorithmRulesResponse from a JSON string
list_custom_bidding_algorithm_rules_response_instance = ListCustomBiddingAlgorithmRulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomBiddingAlgorithmRulesResponse.to_json())

# convert the object into a dict
list_custom_bidding_algorithm_rules_response_dict = list_custom_bidding_algorithm_rules_response_instance.to_dict()
# create an instance of ListCustomBiddingAlgorithmRulesResponse from a dict
list_custom_bidding_algorithm_rules_response_from_dict = ListCustomBiddingAlgorithmRulesResponse.from_dict(list_custom_bidding_algorithm_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


