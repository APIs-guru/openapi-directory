# FinalReportLinksMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | [optional] 
**href** | **str** | Please note GET is not currently supported | [optional] 
**message_uuid** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**usage** | [**MessageStatusUsage**](MessageStatusUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.final_report_links_messages_inner import FinalReportLinksMessagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of FinalReportLinksMessagesInner from a JSON string
final_report_links_messages_inner_instance = FinalReportLinksMessagesInner.from_json(json)
# print the JSON string representation of the object
print(FinalReportLinksMessagesInner.to_json())

# convert the object into a dict
final_report_links_messages_inner_dict = final_report_links_messages_inner_instance.to_dict()
# create an instance of FinalReportLinksMessagesInner from a dict
final_report_links_messages_inner_from_dict = FinalReportLinksMessagesInner.from_dict(final_report_links_messages_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


