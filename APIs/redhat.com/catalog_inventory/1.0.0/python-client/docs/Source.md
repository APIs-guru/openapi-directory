# Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**availability_message** | **str** |  | [optional] [readonly] 
**availability_status** | **str** |  | [optional] 
**cloud_connector_id** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] [readonly] [default to False]
**id** | **str** | ID of the resource | [optional] [readonly] 
**info** | **object** |  | [optional] [readonly] 
**last_available_at** | **datetime** |  | [optional] [readonly] 
**last_checked_at** | **datetime** |  | [optional] [readonly] 
**last_refresh_message** | **str** |  | [optional] [readonly] 
**last_successful_refresh_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**previous_sha** | **str** |  | [optional] [readonly] 
**previous_size** | **int** |  | [optional] [readonly] 
**refresh_finished_at** | **datetime** |  | [optional] [readonly] 
**refresh_started_at** | **datetime** |  | [optional] [readonly] 
**refresh_state** | **str** |  | [optional] 
**refresh_task_id** | **str** |  | [optional] [readonly] 
**uid** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


