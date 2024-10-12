# MarkerRead



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
from openapi_client.models.marker_read import MarkerRead

# TODO update the JSON string below
json = "{}"
# create an instance of MarkerRead from a JSON string
marker_read_instance = MarkerRead.from_json(json)
# print the JSON string representation of the object
print(MarkerRead.to_json())

# convert the object into a dict
marker_read_dict = marker_read_instance.to_dict()
# create an instance of MarkerRead from a dict
marker_read_from_dict = MarkerRead.from_dict(marker_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


