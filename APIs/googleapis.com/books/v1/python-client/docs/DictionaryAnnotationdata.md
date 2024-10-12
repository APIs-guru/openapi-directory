# DictionaryAnnotationdata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_type** | **str** | The type of annotation this data is for. | [optional] 
**data** | [**Dictlayerdata**](Dictlayerdata.md) |  | [optional] 
**encoded_data** | **bytearray** | Base64 encoded data for this annotation data. | [optional] 
**id** | **str** | Unique id for this annotation data. | [optional] 
**kind** | **str** | Resource Type | [optional] 
**layer_id** | **str** | The Layer id for this data. * | [optional] 
**self_link** | **str** | URL for this resource. * | [optional] 
**updated** | **str** | Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). | [optional] 
**volume_id** | **str** | The volume id for this data. * | [optional] 

## Example

```python
from openapi_client.models.dictionary_annotationdata import DictionaryAnnotationdata

# TODO update the JSON string below
json = "{}"
# create an instance of DictionaryAnnotationdata from a JSON string
dictionary_annotationdata_instance = DictionaryAnnotationdata.from_json(json)
# print the JSON string representation of the object
print(DictionaryAnnotationdata.to_json())

# convert the object into a dict
dictionary_annotationdata_dict = dictionary_annotationdata_instance.to_dict()
# create an instance of DictionaryAnnotationdata from a dict
dictionary_annotationdata_from_dict = DictionaryAnnotationdata.from_dict(dictionary_annotationdata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


