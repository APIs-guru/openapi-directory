# ExportMessagesRequest

Request to schedule an export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end of the range in &#x60;send_time&#x60; (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the &#x60;start_time&#x60; defined below. Only messages whose &#x60;send_time&#x60; lies in the range &#x60;start_time&#x60; (inclusive) to &#x60;end_time&#x60; (exclusive) are exported. | [optional] 
**filter** | **str** | Restricts messages exported to those matching a filter, only applicable to PubsubDestination. The following syntax is available: * A string field value can be written as text inside quotation marks, for example &#x60;\&quot;query text\&quot;&#x60;. The only valid relational operation for text fields is equality (&#x60;&#x3D;&#x60;), where text is searched within the field, rather than having the field be equal to the text. For example, &#x60;\&quot;Comment &#x3D; great\&quot;&#x60; returns messages with &#x60;great&#x60; in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (&#x60;&#x3D;&#x60;), along with the less than/greater than operators (&#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60;). Note that there is no inequality (&#x60;!&#x3D;&#x60;) operator. You can prepend the &#x60;NOT&#x60; operator to an expression to negate it. * A date field value must be written in the &#x60;yyyy-mm-dd&#x60; format. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (&#x60;&#x3D;&#x60;) , along with the less than/greater than operators (&#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60;). Note that there is no inequality (&#x60;!&#x3D;&#x60;) operator. You can prepend the &#x60;NOT&#x60; operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding &#x60;AND&#x60; or &#x60;OR&#x60; operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, and is just another part of the character string to be matched. You can prepend the &#x60;NOT&#x60; operator to an expression to negate it. The following fields and functions are available for filtering: * &#x60;message_type&#x60;, from the MSH-9.1 field. For example, &#x60;NOT message_type &#x3D; \&quot;ADT\&quot;&#x60;. * &#x60;send_date&#x60; or &#x60;sendDate&#x60;, the &#x60;yyyy-mm-dd&#x60; date the message was sent in the dataset&#39;s time_zone, from the MSH-7 segment. For example, &#x60;send_date &lt; \&quot;2017-01-02\&quot;&#x60;. * &#x60;send_time&#x60;, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, &#x60;send_time &lt; \&quot;2017-01-02T00:00:00-05:00\&quot;&#x60;. * &#x60;create_time&#x60;, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, &#x60;create_time &lt; \&quot;2017-01-02T00:00:00-05:00\&quot;&#x60;. * &#x60;send_facility&#x60;, the care center that the message came from, from the MSH-4 segment. For example, &#x60;send_facility &#x3D; \&quot;ABC\&quot;&#x60;. Note: The filter will be applied to every message in the HL7v2 store whose &#x60;send_time&#x60; lies in the range defined by the &#x60;start_time&#x60; and the &#x60;end_time&#x60;. Even if the filter only matches a small set of messages, the export operation can still take a long time to finish when a lot of messages are between the specified &#x60;start_time&#x60; and &#x60;end_time&#x60; range. | [optional] 
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 
**pubsub_destination** | [**PubsubDestination**](PubsubDestination.md) |  | [optional] 
**start_time** | **str** | The start of the range in &#x60;send_time&#x60; (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the &#x60;end_time&#x60; defined below. Only messages whose &#x60;send_time&#x60; lies in the range &#x60;start_time&#x60; (inclusive) to &#x60;end_time&#x60; (exclusive) are exported. | [optional] 

## Example

```python
from openapi_client.models.export_messages_request import ExportMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportMessagesRequest from a JSON string
export_messages_request_instance = ExportMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(ExportMessagesRequest.to_json())

# convert the object into a dict
export_messages_request_dict = export_messages_request_instance.to_dict()
# create an instance of ExportMessagesRequest from a dict
export_messages_request_from_dict = ExportMessagesRequest.from_dict(export_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


