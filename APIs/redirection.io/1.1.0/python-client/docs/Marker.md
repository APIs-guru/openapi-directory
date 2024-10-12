# Marker



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**maximum_occurrence** | **int** |  | [optional] 
**minimum_occurrence** | **int** |  | [optional] 
**name** | **str** |  | 
**options** | **List[str]** |  | [optional] 
**regex** | **str** |  | [optional] 
**transformers** | **List[str]** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.marker import Marker

# TODO update the JSON string below
json = "{}"
# create an instance of Marker from a JSON string
marker_instance = Marker.from_json(json)
# print the JSON string representation of the object
print(Marker.to_json())

# convert the object into a dict
marker_dict = marker_instance.to_dict()
# create an instance of Marker from a dict
marker_from_dict = Marker.from_dict(marker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


