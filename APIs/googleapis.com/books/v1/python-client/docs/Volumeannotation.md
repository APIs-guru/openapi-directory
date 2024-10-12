# Volumeannotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_data_id** | **str** | The annotation data id for this volume annotation. | [optional] 
**annotation_data_link** | **str** | Link to get data for this annotation. | [optional] 
**annotation_type** | **str** | The type of annotation this is. | [optional] 
**content_ranges** | [**VolumeannotationContentRanges**](VolumeannotationContentRanges.md) |  | [optional] 
**data** | **str** | Data for this annotation. | [optional] 
**deleted** | **bool** | Indicates that this annotation is deleted. | [optional] 
**id** | **str** | Unique id of this volume annotation. | [optional] 
**kind** | **str** | Resource Type | [optional] 
**layer_id** | **str** | The Layer this annotation is for. | [optional] 
**page_ids** | **List[str]** | Pages the annotation spans. | [optional] 
**selected_text** | **str** | Excerpt from the volume. | [optional] 
**self_link** | **str** | URL to this resource. | [optional] 
**updated** | **str** | Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format). | [optional] 
**volume_id** | **str** | The Volume this annotation is for. | [optional] 

## Example

```python
from openapi_client.models.volumeannotation import Volumeannotation

# TODO update the JSON string below
json = "{}"
# create an instance of Volumeannotation from a JSON string
volumeannotation_instance = Volumeannotation.from_json(json)
# print the JSON string representation of the object
print(Volumeannotation.to_json())

# convert the object into a dict
volumeannotation_dict = volumeannotation_instance.to_dict()
# create an instance of Volumeannotation from a dict
volumeannotation_from_dict = Volumeannotation.from_dict(volumeannotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


