# CustomBiddingAlgorithmRulesRef

The reference to the uploaded AlgorithmRules file. Retrieve the location to upload new AlgorithmRules file to using customBiddingAlgorithms.uploadRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | A resource name to be used in media.download to download the rules files. Or media.upload to upload the rules files. Resource names have the format &#x60;customBiddingAlgorithms/{custom_bidding_algorithm_id}/rulesRef/{ref_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.custom_bidding_algorithm_rules_ref import CustomBiddingAlgorithmRulesRef

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingAlgorithmRulesRef from a JSON string
custom_bidding_algorithm_rules_ref_instance = CustomBiddingAlgorithmRulesRef.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingAlgorithmRulesRef.to_json())

# convert the object into a dict
custom_bidding_algorithm_rules_ref_dict = custom_bidding_algorithm_rules_ref_instance.to_dict()
# create an instance of CustomBiddingAlgorithmRulesRef from a dict
custom_bidding_algorithm_rules_ref_from_dict = CustomBiddingAlgorithmRulesRef.from_dict(custom_bidding_algorithm_rules_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


