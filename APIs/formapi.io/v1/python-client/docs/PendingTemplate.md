# PendingTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_additional_properties** | **bool** |  | 
**description** | **str** |  | 
**editable_submissions** | **bool** |  | 
**expiration_interval** | **str** |  | [optional] 
**expire_after** | **float** |  | [optional] 
**expire_submissions** | **bool** |  | 
**id** | **str** |  | 
**locked** | **bool** |  | 
**name** | **str** |  | 
**parent_folder_id** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**public_submissions** | **bool** |  | 
**public_web_form** | **bool** |  | 
**redirect_url** | **str** |  | 
**slack_webhook_url** | **str** |  | 
**template_type** | **str** |  | 
**webhook_url** | **str** |  | 

## Example

```python
from openapi_client.models.pending_template import PendingTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of PendingTemplate from a JSON string
pending_template_instance = PendingTemplate.from_json(json)
# print the JSON string representation of the object
print(PendingTemplate.to_json())

# convert the object into a dict
pending_template_dict = pending_template_instance.to_dict()
# create an instance of PendingTemplate from a dict
pending_template_from_dict = PendingTemplate.from_dict(pending_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


