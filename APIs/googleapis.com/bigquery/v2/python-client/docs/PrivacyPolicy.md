# PrivacyPolicy

Represents privacy policy that contains the privacy requirements specified by the data owner. Currently, this is only supported on views.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_threshold_policy** | [**AggregationThresholdPolicy**](AggregationThresholdPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.privacy_policy import PrivacyPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PrivacyPolicy from a JSON string
privacy_policy_instance = PrivacyPolicy.from_json(json)
# print the JSON string representation of the object
print(PrivacyPolicy.to_json())

# convert the object into a dict
privacy_policy_dict = privacy_policy_instance.to_dict()
# create an instance of PrivacyPolicy from a dict
privacy_policy_from_dict = PrivacyPolicy.from_dict(privacy_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


