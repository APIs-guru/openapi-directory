# Usage

Configuration controlling usage of a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**producer_notification_channel** | **str** | The full resource name of a channel used for sending notifications to the service producer. Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview. | [optional] 
**requirements** | **List[str]** | Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form /; for example &#39;serviceusage.googleapis.com/billing-enabled&#39;. For Google APIs, a Terms of Service requirement must be included here. Google Cloud APIs must include \&quot;serviceusage.googleapis.com/tos/cloud\&quot;. Other Google APIs should include \&quot;serviceusage.googleapis.com/tos/universal\&quot;. Additional ToS can be included based on the business needs. | [optional] 
**rules** | [**List[UsageRule]**](UsageRule.md) | A list of usage rules that apply to individual API methods. **NOTE:** All service configuration rules follow \&quot;last one wins\&quot; order. | [optional] 

## Example

```python
from openapi_client.models.usage import Usage

# TODO update the JSON string below
json = "{}"
# create an instance of Usage from a JSON string
usage_instance = Usage.from_json(json)
# print the JSON string representation of the object
print(Usage.to_json())

# convert the object into a dict
usage_dict = usage_instance.to_dict()
# create an instance of Usage from a dict
usage_from_dict = Usage.from_dict(usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


