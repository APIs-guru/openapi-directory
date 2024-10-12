# GooglePrivacyDlpV2PubSubExpressions

An expression, consisting of an operator and conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GooglePrivacyDlpV2PubSubCondition]**](GooglePrivacyDlpV2PubSubCondition.md) | Conditions to apply to the expression. | [optional] 
**logical_operator** | **str** | The operator to apply to the collection of conditions. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_pub_sub_expressions import GooglePrivacyDlpV2PubSubExpressions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PubSubExpressions from a JSON string
google_privacy_dlp_v2_pub_sub_expressions_instance = GooglePrivacyDlpV2PubSubExpressions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PubSubExpressions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_pub_sub_expressions_dict = google_privacy_dlp_v2_pub_sub_expressions_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PubSubExpressions from a dict
google_privacy_dlp_v2_pub_sub_expressions_from_dict = GooglePrivacyDlpV2PubSubExpressions.from_dict(google_privacy_dlp_v2_pub_sub_expressions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


