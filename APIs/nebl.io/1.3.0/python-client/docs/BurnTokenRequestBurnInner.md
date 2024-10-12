# BurnTokenRequestBurnInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount of tokens to burn | [optional] 
**token_id** | **str** | Unique token id we are burning | [optional] 

## Example

```python
from openapi_client.models.burn_token_request_burn_inner import BurnTokenRequestBurnInner

# TODO update the JSON string below
json = "{}"
# create an instance of BurnTokenRequestBurnInner from a JSON string
burn_token_request_burn_inner_instance = BurnTokenRequestBurnInner.from_json(json)
# print the JSON string representation of the object
print(BurnTokenRequestBurnInner.to_json())

# convert the object into a dict
burn_token_request_burn_inner_dict = burn_token_request_burn_inner_instance.to_dict()
# create an instance of BurnTokenRequestBurnInner from a dict
burn_token_request_burn_inner_from_dict = BurnTokenRequestBurnInner.from_dict(burn_token_request_burn_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


