# Filters

Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop** | [**Rectangle**](Rectangle.md) |  | [optional] 
**deinterlace** | [**Deinterlace**](Deinterlace.md) |  | [optional] 
**overlays** | [**List[Overlay]**](Overlay.md) | The properties of overlays to be applied to the input video. These could be audio, image or video overlays. | [optional] 
**rotation** | **str** | The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto | [optional] 

## Example

```python
from openapi_client.models.filters import Filters

# TODO update the JSON string below
json = "{}"
# create an instance of Filters from a JSON string
filters_instance = Filters.from_json(json)
# print the JSON string representation of the object
print(Filters.to_json())

# convert the object into a dict
filters_dict = filters_instance.to_dict()
# create an instance of Filters from a dict
filters_from_dict = Filters.from_dict(filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


