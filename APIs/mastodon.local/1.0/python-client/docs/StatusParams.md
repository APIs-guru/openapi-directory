# StatusParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | application_id | [optional] 
**in_reply_to_id** | **str** | in_reply_to_id | [optional] 
**media_ids** | **List[str]** | media_ids | [optional] 
**scheduled_at** | **datetime** | scheduled_at | [optional] 
**sensitive** | **bool** | sensitive | [optional] 
**spoiler_text** | **str** | spoiler_text | [optional] 
**text** | **str** | text | [optional] 
**visibility** | **str** | visibility | [optional] 

## Example

```python
from openapi_client.models.status_params import StatusParams

# TODO update the JSON string below
json = "{}"
# create an instance of StatusParams from a JSON string
status_params_instance = StatusParams.from_json(json)
# print the JSON string representation of the object
print(StatusParams.to_json())

# convert the object into a dict
status_params_dict = status_params_instance.to_dict()
# create an instance of StatusParams from a dict
status_params_from_dict = StatusParams.from_dict(status_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


