# Layersummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_count** | **int** | The number of annotations for this layer. | [optional] 
**annotation_types** | **List[str]** | The list of annotation types contained for this layer. | [optional] 
**annotations_data_link** | **str** | Link to get data for this annotation. | [optional] 
**annotations_link** | **str** | The link to get the annotations for this layer. | [optional] 
**content_version** | **str** | The content version this resource is for. | [optional] 
**data_count** | **int** | The number of data items for this layer. | [optional] 
**id** | **str** | Unique id of this layer summary. | [optional] 
**kind** | **str** | Resource Type | [optional] 
**layer_id** | **str** | The layer id for this summary. | [optional] 
**self_link** | **str** | URL to this resource. | [optional] 
**updated** | **str** | Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format). | [optional] 
**volume_annotations_version** | **str** | The current version of this layer&#39;s volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. | [optional] 
**volume_id** | **str** | The volume id this resource is for. | [optional] 

## Example

```python
from openapi_client.models.layersummary import Layersummary

# TODO update the JSON string below
json = "{}"
# create an instance of Layersummary from a JSON string
layersummary_instance = Layersummary.from_json(json)
# print the JSON string representation of the object
print(Layersummary.to_json())

# convert the object into a dict
layersummary_dict = layersummary_instance.to_dict()
# create an instance of Layersummary from a dict
layersummary_from_dict = Layersummary.from_dict(layersummary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


