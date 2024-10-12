# PubsubConfig

Configuration to publish a Cloud Pub/Sub message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_format** | **str** | The format of the Cloud Pub/Sub messages. | [optional] 
**service_account_email** | **str** | Email address of the service account used for publishing Cloud Pub/Sub messages. This service account needs to be in the same project as the PubsubConfig. When added, the caller needs to have iam.serviceAccounts.actAs permission on this service account. If unspecified, it defaults to the compute engine default service account. | [optional] 
**topic** | **str** | A topic of Cloud Pub/Sub. Values are of the form &#x60;projects//topics/&#x60;. The project needs to be the same project as this config is in. | [optional] 

## Example

```python
from openapi_client.models.pubsub_config import PubsubConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubConfig from a JSON string
pubsub_config_instance = PubsubConfig.from_json(json)
# print the JSON string representation of the object
print(PubsubConfig.to_json())

# convert the object into a dict
pubsub_config_dict = pubsub_config_instance.to_dict()
# create an instance of PubsubConfig from a dict
pubsub_config_from_dict = PubsubConfig.from_dict(pubsub_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


