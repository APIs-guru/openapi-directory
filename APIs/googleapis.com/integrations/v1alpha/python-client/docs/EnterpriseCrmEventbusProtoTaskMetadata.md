# EnterpriseCrmEventbusProtoTaskMetadata

TaskMetadata are attributes that are associated to every common Task we have.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_task_name** | **str** | The new task name to replace the current task if it is deprecated. Otherwise, it is the same as the current task name. | [optional] 
**admins** | [**List[EnterpriseCrmEventbusProtoTaskMetadataAdmin]**](EnterpriseCrmEventbusProtoTaskMetadataAdmin.md) |  | [optional] 
**category** | **str** |  | [optional] 
**code_search_link** | **str** | The Code Search link to the Task Java file. | [optional] 
**default_json_validation_option** | **str** | Controls whether JSON workflow parameters are validated against provided schemas before and/or after this task&#39;s execution. | [optional] 
**default_spec** | **str** | Contains the initial configuration of the task with default values set. For now, The string should be compatible to an ASCII-proto format. | [optional] 
**description** | **str** | In a few sentences, describe the purpose and usage of the task. | [optional] 
**descriptive_name** | **str** | The string name to show on the task list on the Workflow editor screen. This should be a very short, one to two words name for the task. (e.g. \&quot;Send Mail\&quot;) | [optional] 
**doc_markdown** | **str** | Snippet of markdown documentation to embed in the RHP for this task. | [optional] 
**external_category** | **str** |  | [optional] 
**external_category_sequence** | **int** | Sequence with which the task in specific category to be displayed in task discovery panel for external users. | [optional] 
**external_doc_html** | **str** | External-facing documention embedded in the RHP for this task. | [optional] 
**external_doc_link** | **str** | Doc link for external-facing documentation (separate from g3doc). | [optional] 
**external_doc_markdown** | **str** | DEPRECATED: Use external_doc_html. | [optional] 
**g3_doc_link** | **str** | URL to the associated G3 Doc for the task if available | [optional] 
**icon_link** | **str** | URL to gstatic image icon for this task. This icon shows up on the task list panel along with the task name in the Workflow Editor screen. Use the 24p, 2x, gray color icon image format. | [optional] 
**is_deprecated** | **bool** | The deprecation status of the current task. Default value is false; | [optional] 
**name** | **str** | The actual class name or the annotated name of the task. Task Author should initialize this field with value from the getName() method of the Task class. | [optional] 
**standalone_external_doc_html** | **str** | External-facing documention for standalone IP in pantheon embedded in the RHP for this task. Non null only if different from external_doc_html | [optional] 
**status** | **str** | Allows author to indicate if the task is ready to use or not. If not set, then it will default to INACTIVE. | [optional] 
**system** | **str** |  | [optional] 
**tags** | **List[str]** | A set of tags that pertain to a particular task. This can be used to improve the searchability of tasks with several names (\&quot;REST Caller\&quot; vs. \&quot;Call REST Endpoint\&quot;) or to help users find tasks based on related words. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_task_metadata import EnterpriseCrmEventbusProtoTaskMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTaskMetadata from a JSON string
enterprise_crm_eventbus_proto_task_metadata_instance = EnterpriseCrmEventbusProtoTaskMetadata.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTaskMetadata.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_task_metadata_dict = enterprise_crm_eventbus_proto_task_metadata_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTaskMetadata from a dict
enterprise_crm_eventbus_proto_task_metadata_from_dict = EnterpriseCrmEventbusProtoTaskMetadata.from_dict(enterprise_crm_eventbus_proto_task_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


