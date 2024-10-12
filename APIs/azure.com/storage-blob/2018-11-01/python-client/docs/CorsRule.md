# CorsRule

Specifies a CORS rule for the Blob service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_headers** | **List[str]** | Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. | 
**allowed_methods** | **List[str]** | Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. | 
**allowed_origins** | **List[str]** | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or \&quot;*\&quot; to allow all domains | 
**exposed_headers** | **List[str]** | Required if CorsRule element is present. A list of response headers to expose to CORS clients. | 
**max_age_in_seconds** | **int** | Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. | 

## Example

```python
from openapi_client.models.cors_rule import CorsRule

# TODO update the JSON string below
json = "{}"
# create an instance of CorsRule from a JSON string
cors_rule_instance = CorsRule.from_json(json)
# print the JSON string representation of the object
print(CorsRule.to_json())

# convert the object into a dict
cors_rule_dict = cors_rule_instance.to_dict()
# create an instance of CorsRule from a dict
cors_rule_from_dict = CorsRule.from_dict(cors_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


