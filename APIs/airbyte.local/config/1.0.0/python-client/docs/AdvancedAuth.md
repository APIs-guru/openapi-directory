# AdvancedAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_flow_type** | **str** |  | [optional] 
**oauth_config_specification** | [**OAuthConfigSpecification**](OAuthConfigSpecification.md) |  | [optional] 
**predicate_key** | **List[str]** | Json Path to a field in the connectorSpecification that should exist for the advanced auth to be applicable. | [optional] 
**predicate_value** | **str** | Value of the predicate_key fields for the advanced auth to be applicable. | [optional] 

## Example

```python
from openapi_client.models.advanced_auth import AdvancedAuth

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedAuth from a JSON string
advanced_auth_instance = AdvancedAuth.from_json(json)
# print the JSON string representation of the object
print(AdvancedAuth.to_json())

# convert the object into a dict
advanced_auth_dict = advanced_auth_instance.to_dict()
# create an instance of AdvancedAuth from a dict
advanced_auth_from_dict = AdvancedAuth.from_dict(advanced_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


