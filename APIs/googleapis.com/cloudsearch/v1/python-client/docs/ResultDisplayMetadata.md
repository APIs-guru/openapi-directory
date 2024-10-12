# ResultDisplayMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metalines** | [**List[ResultDisplayLine]**](ResultDisplayLine.md) | The metalines content to be displayed with the result. | [optional] 
**object_type_label** | **str** | The display label for the object. | [optional] 

## Example

```python
from openapi_client.models.result_display_metadata import ResultDisplayMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ResultDisplayMetadata from a JSON string
result_display_metadata_instance = ResultDisplayMetadata.from_json(json)
# print the JSON string representation of the object
print(ResultDisplayMetadata.to_json())

# convert the object into a dict
result_display_metadata_dict = result_display_metadata_instance.to_dict()
# create an instance of ResultDisplayMetadata from a dict
result_display_metadata_from_dict = ResultDisplayMetadata.from_dict(result_display_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


