# PossibleMerchantMatches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminated_merchant** | [**List[TerminatedMerchant]**](TerminatedMerchant.md) |  | [optional] 
**total_length** | **str** | The total length of the result set from possible merchant matches of inquiry. | [optional] 

## Example

```python
from openapi_client.models.possible_merchant_matches import PossibleMerchantMatches

# TODO update the JSON string below
json = "{}"
# create an instance of PossibleMerchantMatches from a JSON string
possible_merchant_matches_instance = PossibleMerchantMatches.from_json(json)
# print the JSON string representation of the object
print(PossibleMerchantMatches.to_json())

# convert the object into a dict
possible_merchant_matches_dict = possible_merchant_matches_instance.to_dict()
# create an instance of PossibleMerchantMatches from a dict
possible_merchant_matches_from_dict = PossibleMerchantMatches.from_dict(possible_merchant_matches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


