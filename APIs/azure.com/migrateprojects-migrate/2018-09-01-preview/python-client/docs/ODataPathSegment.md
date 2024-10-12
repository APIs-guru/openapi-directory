# ODataPathSegment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edm_type** | [**IEdmType**](IEdmType.md) |  | [optional] 
**identifier** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.o_data_path_segment import ODataPathSegment

# TODO update the JSON string below
json = "{}"
# create an instance of ODataPathSegment from a JSON string
o_data_path_segment_instance = ODataPathSegment.from_json(json)
# print the JSON string representation of the object
print(ODataPathSegment.to_json())

# convert the object into a dict
o_data_path_segment_dict = o_data_path_segment_instance.to_dict()
# create an instance of ODataPathSegment from a dict
o_data_path_segment_from_dict = ODataPathSegment.from_dict(o_data_path_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


