# Volumeannotations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Volumeannotation]**](Volumeannotation.md) | A list of volume annotations. | [optional] 
**kind** | **str** | Resource type | [optional] 
**next_page_token** | **str** | Token to pass in for pagination for the next page. This will not be present if this request does not have more results. | [optional] 
**total_items** | **int** | The total number of volume annotations found. | [optional] 
**version** | **str** | The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn&#39;t apply to the annotation data, just the information in this response (e.g. the location of annotations in the book). | [optional] 

## Example

```python
from openapi_client.models.volumeannotations import Volumeannotations

# TODO update the JSON string below
json = "{}"
# create an instance of Volumeannotations from a JSON string
volumeannotations_instance = Volumeannotations.from_json(json)
# print the JSON string representation of the object
print(Volumeannotations.to_json())

# convert the object into a dict
volumeannotations_dict = volumeannotations_instance.to_dict()
# create an instance of Volumeannotations from a dict
volumeannotations_from_dict = Volumeannotations.from_dict(volumeannotations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


