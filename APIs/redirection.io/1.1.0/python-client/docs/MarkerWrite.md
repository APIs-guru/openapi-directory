# MarkerWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_occurrence** | **int** |  | [optional] 
**minimum_occurrence** | **int** |  | [optional] 
**name** | **str** |  | 
**options** | **List[str]** |  | [optional] 
**transformers** | **List[str]** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.marker_write import MarkerWrite

# TODO update the JSON string below
json = "{}"
# create an instance of MarkerWrite from a JSON string
marker_write_instance = MarkerWrite.from_json(json)
# print the JSON string representation of the object
print(MarkerWrite.to_json())

# convert the object into a dict
marker_write_dict = marker_write_instance.to_dict()
# create an instance of MarkerWrite from a dict
marker_write_from_dict = MarkerWrite.from_dict(marker_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


