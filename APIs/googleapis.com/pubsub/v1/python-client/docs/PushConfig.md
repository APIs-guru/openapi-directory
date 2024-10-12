# PushConfig

Configuration for a push delivery endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Optional. Endpoint configuration attributes that can be used to control different aspects of the message delivery. The only currently supported attribute is &#x60;x-goog-version&#x60;, which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata). If not present during the &#x60;CreateSubscription&#x60; call, it will default to the version of the Pub/Sub API used to make such call. If not present in a &#x60;ModifyPushConfig&#x60; call, its value will not be changed. &#x60;GetSubscription&#x60; calls will always return a valid version, even if the subscription was created without this attribute. The only supported values for the &#x60;x-goog-version&#x60; attribute are: * &#x60;v1beta1&#x60;: uses the push format defined in the v1beta1 Pub/Sub API. * &#x60;v1&#x60; or &#x60;v1beta2&#x60;: uses the push format defined in the v1 Pub/Sub API. For example: &#x60;attributes { \&quot;x-goog-version\&quot;: \&quot;v1\&quot; }&#x60; | [optional] 
**no_wrapper** | [**NoWrapper**](NoWrapper.md) |  | [optional] 
**oidc_token** | [**OidcToken**](OidcToken.md) |  | [optional] 
**pubsub_wrapper** | **object** | The payload to the push endpoint is in the form of the JSON representation of a PubsubMessage (https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage). | [optional] 
**push_endpoint** | **str** | Optional. A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use &#x60;https://example.com/push&#x60;. | [optional] 

## Example

```python
from openapi_client.models.push_config import PushConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PushConfig from a JSON string
push_config_instance = PushConfig.from_json(json)
# print the JSON string representation of the object
print(PushConfig.to_json())

# convert the object into a dict
push_config_dict = push_config_instance.to_dict()
# create an instance of PushConfig from a dict
push_config_from_dict = PushConfig.from_dict(push_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


