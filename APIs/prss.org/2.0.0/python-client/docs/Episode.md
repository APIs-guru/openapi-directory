# Episode

An episode that defines a specific air date for an instance of a program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_air_date** | **datetime** | The date the air window opens for the episode. | 
**begin_transmission_date** | **datetime** | The date the live stream begins for the episode. Only set for live and LWSF episodes. | [optional] 
**created_date** | **datetime** | The date the segment was created. Generated at creation. | [optional] 
**customer_id** | **int** | The ID of the customer that owns this programs. | [optional] 
**end_air_date** | **datetime** | The date the air window closes for the episode. | 
**end_transmission_date** | **datetime** | The date the live stream ends for the episode. Only set for live and LWSF episodes. | [optional] 
**id** | **int** | The unique ID of the episode. Generated at creation. | [optional] 
**last_modified_date** | **datetime** | The date the segment was last modified/updated. Automatically updated on any write operation. | [optional] 
**program_id** | **int** | The ID of the program that owns this episode. | 
**title** | **str** | The title of the program. | 

## Example

```python
from openapi_client.models.episode import Episode

# TODO update the JSON string below
json = "{}"
# create an instance of Episode from a JSON string
episode_instance = Episode.from_json(json)
# print the JSON string representation of the object
print(Episode.to_json())

# convert the object into a dict
episode_dict = episode_instance.to_dict()
# create an instance of Episode from a dict
episode_from_dict = Episode.from_dict(episode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


