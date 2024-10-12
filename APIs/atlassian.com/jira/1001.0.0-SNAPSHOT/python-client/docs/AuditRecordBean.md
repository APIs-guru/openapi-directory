# AuditRecordBean

An audit record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_items** | [**List[AssociatedItemBean]**](AssociatedItemBean.md) | The list of items associated with the changed record. | [optional] [readonly] 
**author_key** | **str** | Deprecated, use &#x60;authorAccountId&#x60; instead. The key of the user who created the audit record. | [optional] [readonly] 
**category** | **str** | The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM). | [optional] [readonly] 
**changed_values** | [**List[ChangedValueBean]**](ChangedValueBean.md) | The list of values changed in the record event. | [optional] [readonly] 
**created** | **datetime** | The date and time on which the audit record was created. | [optional] [readonly] 
**description** | **str** | The description of the audit record. | [optional] [readonly] 
**event_source** | **str** | The event the audit record originated from. | [optional] [readonly] 
**id** | **int** | The ID of the audit record. | [optional] [readonly] 
**object_item** | [**AssociatedItemBean**](AssociatedItemBean.md) |  | [optional] 
**remote_address** | **str** | The URL of the computer where the creation of the audit record was initiated. | [optional] [readonly] 
**summary** | **str** | The summary of the audit record. | [optional] [readonly] 

## Example

```python
from openapi_client.models.audit_record_bean import AuditRecordBean

# TODO update the JSON string below
json = "{}"
# create an instance of AuditRecordBean from a JSON string
audit_record_bean_instance = AuditRecordBean.from_json(json)
# print the JSON string representation of the object
print(AuditRecordBean.to_json())

# convert the object into a dict
audit_record_bean_dict = audit_record_bean_instance.to_dict()
# create an instance of AuditRecordBean from a dict
audit_record_bean_from_dict = AuditRecordBean.from_dict(audit_record_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


