# Spot

An audio spot for insertion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The date the spot was created. Generated at creation. | [optional] 
**duration** | **int** | The length (duration) of the spot in seconds. | [optional] 
**file_name** | **str** | The name of the audio content file. Generated at creation. | [optional] 
**file_size** | **int** | The size of the audio content file in bytes. Generated at creation. | [optional] 
**id** | **int** | The unique ID of the spot. Generated at creation. | [optional] 
**last_modified_date** | **datetime** | The date the spot was last modified/updated. Automatically updated on any write operation. | [optional] 
**last_uploaded_date** | **datetime** | The date the spot audio file was uploaded. Automatically updated on upload. | [optional] 
**name** | **str** | The unique name of the spot | [optional] 
**notes** | **str** | Miscellaneous notes about the spot | [optional] 
**original_file_name** | **str** | The original name of the audio content file. | [optional] 

## Example

```python
from openapi_client.models.spot import Spot

# TODO update the JSON string below
json = "{}"
# create an instance of Spot from a JSON string
spot_instance = Spot.from_json(json)
# print the JSON string representation of the object
print(Spot.to_json())

# convert the object into a dict
spot_dict = spot_instance.to_dict()
# create an instance of Spot from a dict
spot_from_dict = Spot.from_dict(spot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


