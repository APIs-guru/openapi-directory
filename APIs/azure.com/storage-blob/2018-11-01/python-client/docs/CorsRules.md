# CorsRules

Sets the CORS rules. You can include up to five CorsRule elements in the request. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cors_rules** | [**List[CorsRule]**](CorsRule.md) | The List of CORS rules. You can include up to five CorsRule elements in the request.  | [optional] 

## Example

```python
from openapi_client.models.cors_rules import CorsRules

# TODO update the JSON string below
json = "{}"
# create an instance of CorsRules from a JSON string
cors_rules_instance = CorsRules.from_json(json)
# print the JSON string representation of the object
print(CorsRules.to_json())

# convert the object into a dict
cors_rules_dict = cors_rules_instance.to_dict()
# create an instance of CorsRules from a dict
cors_rules_from_dict = CorsRules.from_dict(cors_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


