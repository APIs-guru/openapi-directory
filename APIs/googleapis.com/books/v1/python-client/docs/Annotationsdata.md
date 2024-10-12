# Annotationsdata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GeoAnnotationdata]**](GeoAnnotationdata.md) | A list of Annotation Data. | [optional] 
**kind** | **str** | Resource type | [optional] 
**next_page_token** | **str** | Token to pass in for pagination for the next page. This will not be present if this request does not have more results. | [optional] 
**total_items** | **int** | The total number of volume annotations found. | [optional] 

## Example

```python
from openapi_client.models.annotationsdata import Annotationsdata

# TODO update the JSON string below
json = "{}"
# create an instance of Annotationsdata from a JSON string
annotationsdata_instance = Annotationsdata.from_json(json)
# print the JSON string representation of the object
print(Annotationsdata.to_json())

# convert the object into a dict
annotationsdata_dict = annotationsdata_instance.to_dict()
# create an instance of Annotationsdata from a dict
annotationsdata_from_dict = Annotationsdata.from_dict(annotationsdata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


