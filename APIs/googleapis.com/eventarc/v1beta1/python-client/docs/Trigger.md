# Trigger

A representation of the trigger resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation time. | [optional] [readonly] 
**destination** | [**Destination**](Destination.md) |  | [optional] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields, and may be sent only on create requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. User labels attached to the triggers that can be used to group resources. | [optional] 
**matching_criteria** | [**List[MatchingCriteria]**](MatchingCriteria.md) | Required. Unordered list. The criteria by which events are filtered. Only events that match with this criteria will be sent to the destination. | [optional] 
**name** | **str** | Required. The resource name of the trigger. Must be unique within the location on the project and must in &#x60;projects/{project}/locations/{location}/triggers/{trigger}&#x60; format. | [optional] 
**service_account** | **str** | Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have &#x60;iam.serviceAccounts.actAs&#x60; permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts?hl&#x3D;en#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have &#39;eventarc.events.receiveAuditLogV1Written&#39; permission. | [optional] 
**transport** | [**Transport**](Transport.md) |  | [optional] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trigger import Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of Trigger from a JSON string
trigger_instance = Trigger.from_json(json)
# print the JSON string representation of the object
print(Trigger.to_json())

# convert the object into a dict
trigger_dict = trigger_instance.to_dict()
# create an instance of Trigger from a dict
trigger_from_dict = Trigger.from_dict(trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


