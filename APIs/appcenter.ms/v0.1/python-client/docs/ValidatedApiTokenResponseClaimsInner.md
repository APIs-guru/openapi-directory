# ValidatedApiTokenResponseClaimsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_type** | **str** |  | [optional] 
**claim_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.validated_api_token_response_claims_inner import ValidatedApiTokenResponseClaimsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ValidatedApiTokenResponseClaimsInner from a JSON string
validated_api_token_response_claims_inner_instance = ValidatedApiTokenResponseClaimsInner.from_json(json)
# print the JSON string representation of the object
print(ValidatedApiTokenResponseClaimsInner.to_json())

# convert the object into a dict
validated_api_token_response_claims_inner_dict = validated_api_token_response_claims_inner_instance.to_dict()
# create an instance of ValidatedApiTokenResponseClaimsInner from a dict
validated_api_token_response_claims_inner_from_dict = ValidatedApiTokenResponseClaimsInner.from_dict(validated_api_token_response_claims_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


