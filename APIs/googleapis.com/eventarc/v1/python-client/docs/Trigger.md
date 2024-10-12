# Trigger

A representation of the trigger resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Optional. The name of the channel associated with the trigger in &#x60;projects/{project}/locations/{location}/channels/{channel}&#x60; format. You must provide a channel to receive events from Eventarc SaaS partners. | [optional] 
**conditions** | [**Dict[str, StateCondition]**](StateCondition.md) | Output only. The reason(s) why a trigger is in FAILED state. | [optional] [readonly] 
**create_time** | **str** | Output only. The creation time. | [optional] [readonly] 
**destination** | [**Destination**](Destination.md) |  | [optional] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding. | [optional] [readonly] 
**event_data_content_type** | **str** | Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to &#x60;application/json&#x60; if the value is not defined. | [optional] 
**event_filters** | [**List[EventFilter]**](EventFilter.md) | Required. Unordered list. The list of filters that applies to event attributes. Only events that match all the provided filters are sent to the destination. | [optional] 
**labels** | **Dict[str, str]** | Optional. User labels attached to the triggers that can be used to group resources. | [optional] 
**name** | **str** | Required. The resource name of the trigger. Must be unique within the location of the project and must be in &#x60;projects/{project}/locations/{location}/triggers/{trigger}&#x60; format. | [optional] 
**service_account** | **str** | Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The &#x60;iam.serviceAccounts.actAs&#x60; permission must be granted on the service account to allow a principal to impersonate the service account. For more information, see the [Roles and permissions](/eventarc/docs/all-roles-permissions) page specific to the trigger destination. | [optional] 
**transport** | [**Transport**](Transport.md) |  | [optional] 
**uid** | **str** | Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. | [optional] [readonly] 
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


