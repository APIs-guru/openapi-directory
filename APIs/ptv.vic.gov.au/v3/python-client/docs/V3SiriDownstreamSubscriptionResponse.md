# V3SiriDownstreamSubscriptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_until** | **datetime** | The Data Horizon of Chronos | [optional] 

## Example

```python
from openapi_client.models.v3_siri_downstream_subscription_response import V3SiriDownstreamSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriDownstreamSubscriptionResponse from a JSON string
v3_siri_downstream_subscription_response_instance = V3SiriDownstreamSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(V3SiriDownstreamSubscriptionResponse.to_json())

# convert the object into a dict
v3_siri_downstream_subscription_response_dict = v3_siri_downstream_subscription_response_instance.to_dict()
# create an instance of V3SiriDownstreamSubscriptionResponse from a dict
v3_siri_downstream_subscription_response_from_dict = V3SiriDownstreamSubscriptionResponse.from_dict(v3_siri_downstream_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


