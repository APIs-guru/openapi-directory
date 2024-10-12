# LogDescriptor

A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A human-readable description of this log. This information appears in the documentation and can contain details. | [optional] 
**display_name** | **str** | The human-readable name for this log. This information appears on the user interface and should be concise. | [optional] 
**labels** | [**List[LabelDescriptor]**](LabelDescriptor.md) | The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid. | [optional] 
**name** | **str** | The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.]. | [optional] 

## Example

```python
from openapi_client.models.log_descriptor import LogDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of LogDescriptor from a JSON string
log_descriptor_instance = LogDescriptor.from_json(json)
# print the JSON string representation of the object
print(LogDescriptor.to_json())

# convert the object into a dict
log_descriptor_dict = log_descriptor_instance.to_dict()
# create an instance of LogDescriptor from a dict
log_descriptor_from_dict = LogDescriptor.from_dict(log_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


