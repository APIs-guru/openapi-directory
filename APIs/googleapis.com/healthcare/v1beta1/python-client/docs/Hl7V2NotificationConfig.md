# Hl7V2NotificationConfig

Specifies where and whether to send notifications upon changes to a data store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. The following syntax is available: * A string field value can be written as text inside quotation marks, for example &#x60;\&quot;query text\&quot;&#x60;. The only valid relational operation for text fields is equality (&#x60;&#x3D;&#x60;), where text is searched within the field, rather than having the field be equal to the text. For example, &#x60;\&quot;Comment &#x3D; great\&quot;&#x60; returns messages with &#x60;great&#x60; in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (&#x60;&#x3D;&#x60;), along with the less than/greater than operators (&#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60;). Note that there is no inequality (&#x60;!&#x3D;&#x60;) operator. You can prepend the &#x60;NOT&#x60; operator to an expression to negate it. * A date field value must be written in &#x60;yyyy-mm-dd&#x60; form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (&#x60;&#x3D;&#x60;) , along with the less than/greater than operators (&#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60;). Note that there is no inequality (&#x60;!&#x3D;&#x60;) operator. You can prepend the &#x60;NOT&#x60; operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding &#x60;AND&#x60; or &#x60;OR&#x60; operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it&#39;s just another part of the character string to be matched. You can prepend the &#x60;NOT&#x60; operator to an expression to negate it. Fields/functions available for filtering are: * &#x60;message_type&#x60;, from the MSH-9.1 field. For example, &#x60;NOT message_type &#x3D; \&quot;ADT\&quot;&#x60;. * &#x60;send_date&#x60; or &#x60;sendDate&#x60;, the YYYY-MM-DD date the message was sent in the dataset&#39;s time_zone, from the MSH-7 segment. For example, &#x60;send_date &lt; \&quot;2017-01-02\&quot;&#x60;. * &#x60;send_time&#x60;, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, &#x60;send_time &lt; \&quot;2017-01-02T00:00:00-05:00\&quot;&#x60;. * &#x60;create_time&#x60;, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, &#x60;create_time &lt; \&quot;2017-01-02T00:00:00-05:00\&quot;&#x60;. * &#x60;send_facility&#x60;, the care center that the message came from, from the MSH-4 segment. For example, &#x60;send_facility &#x3D; \&quot;ABC\&quot;&#x60;. * &#x60;PatientId(value, type)&#x60;, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, &#x60;PatientId(\&quot;123456\&quot;, \&quot;MRN\&quot;)&#x60;. * &#x60;labels.x&#x60;, a string value of the label with key &#x60;x&#x60; as set using the Message.labels map. For example, &#x60;labels.\&quot;priority\&quot;&#x3D;\&quot;high\&quot;&#x60;. The operator &#x60;:*&#x60; can be used to assert the existence of a label. For example, &#x60;labels.\&quot;priority\&quot;:*&#x60;. | [optional] 
**pubsub_topic** | **str** | The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a &#x60;PubsubMessage&#x60; with the following fields: * &#x60;PubsubMessage.Data&#x60; contains the resource name. * &#x60;PubsubMessage.MessageId&#x60; is the ID of this notification. It is guaranteed to be unique within the topic. * &#x60;PubsubMessage.PublishTime&#x60; is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can&#39;t be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). | [optional] 

## Example

```python
from openapi_client.models.hl7_v2_notification_config import Hl7V2NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Hl7V2NotificationConfig from a JSON string
hl7_v2_notification_config_instance = Hl7V2NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(Hl7V2NotificationConfig.to_json())

# convert the object into a dict
hl7_v2_notification_config_dict = hl7_v2_notification_config_instance.to_dict()
# create an instance of Hl7V2NotificationConfig from a dict
hl7_v2_notification_config_from_dict = Hl7V2NotificationConfig.from_dict(hl7_v2_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


