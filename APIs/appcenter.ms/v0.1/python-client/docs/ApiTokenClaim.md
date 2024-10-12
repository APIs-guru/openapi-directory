# ApiTokenClaim


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_type** | **str** |  | [optional] 
**claim_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_token_claim import ApiTokenClaim

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokenClaim from a JSON string
api_token_claim_instance = ApiTokenClaim.from_json(json)
# print the JSON string representation of the object
print(ApiTokenClaim.to_json())

# convert the object into a dict
api_token_claim_dict = api_token_claim_instance.to_dict()
# create an instance of ApiTokenClaim from a dict
api_token_claim_from_dict = ApiTokenClaim.from_dict(api_token_claim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


