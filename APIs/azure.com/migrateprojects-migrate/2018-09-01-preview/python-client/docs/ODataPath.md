# ODataPath


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edm_type** | [**IEdmType**](IEdmType.md) |  | [optional] 
**navigation_source** | [**IEdmNavigationSource**](IEdmNavigationSource.md) |  | [optional] 
**path** | [**List[ODataPathSegment]**](ODataPathSegment.md) |  | [optional] [readonly] 
**path_template** | **str** |  | [optional] [readonly] 
**segments** | [**List[ODataPathSegment]**](ODataPathSegment.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.o_data_path import ODataPath

# TODO update the JSON string below
json = "{}"
# create an instance of ODataPath from a JSON string
o_data_path_instance = ODataPath.from_json(json)
# print the JSON string representation of the object
print(ODataPath.to_json())

# convert the object into a dict
o_data_path_dict = o_data_path_instance.to_dict()
# create an instance of ODataPath from a dict
o_data_path_from_dict = ODataPath.from_dict(o_data_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


