# GoogleApiServiceusageV2alphaEnableRule

The consumer policy rule that defines enabled services, groups, and categories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | **List[str]** | The names of the services that are enabled. Example: &#x60;services/storage.googleapis.com&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_api_serviceusage_v2alpha_enable_rule import GoogleApiServiceusageV2alphaEnableRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleApiServiceusageV2alphaEnableRule from a JSON string
google_api_serviceusage_v2alpha_enable_rule_instance = GoogleApiServiceusageV2alphaEnableRule.from_json(json)
# print the JSON string representation of the object
print(GoogleApiServiceusageV2alphaEnableRule.to_json())

# convert the object into a dict
google_api_serviceusage_v2alpha_enable_rule_dict = google_api_serviceusage_v2alpha_enable_rule_instance.to_dict()
# create an instance of GoogleApiServiceusageV2alphaEnableRule from a dict
google_api_serviceusage_v2alpha_enable_rule_from_dict = GoogleApiServiceusageV2alphaEnableRule.from_dict(google_api_serviceusage_v2alpha_enable_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


