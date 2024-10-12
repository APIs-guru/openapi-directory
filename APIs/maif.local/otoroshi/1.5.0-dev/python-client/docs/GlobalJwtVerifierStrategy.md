# GlobalJwtVerifierStrategy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | String with value Transform | 
**verification_settings** | [**VerificationSettings**](VerificationSettings.md) |  | 
**algo_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | 
**transform_settings** | [**TransformSettings**](TransformSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.global_jwt_verifier_strategy import GlobalJwtVerifierStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalJwtVerifierStrategy from a JSON string
global_jwt_verifier_strategy_instance = GlobalJwtVerifierStrategy.from_json(json)
# print the JSON string representation of the object
print(GlobalJwtVerifierStrategy.to_json())

# convert the object into a dict
global_jwt_verifier_strategy_dict = global_jwt_verifier_strategy_instance.to_dict()
# create an instance of GlobalJwtVerifierStrategy from a dict
global_jwt_verifier_strategy_from_dict = GlobalJwtVerifierStrategy.from_dict(global_jwt_verifier_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


