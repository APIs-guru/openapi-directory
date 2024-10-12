# MetadataInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**view_template** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.metadata_info import MetadataInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataInfo from a JSON string
metadata_info_instance = MetadataInfo.from_json(json)
# print the JSON string representation of the object
print(MetadataInfo.to_json())

# convert the object into a dict
metadata_info_dict = metadata_info_instance.to_dict()
# create an instance of MetadataInfo from a dict
metadata_info_from_dict = MetadataInfo.from_dict(metadata_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


