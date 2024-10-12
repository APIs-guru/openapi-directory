# MetadataSupportedValueDetail

The metadata supported value detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name. | [optional] 
**id** | **str** | The id. | [optional] 

## Example

```python
from openapi_client.models.metadata_supported_value_detail import MetadataSupportedValueDetail

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataSupportedValueDetail from a JSON string
metadata_supported_value_detail_instance = MetadataSupportedValueDetail.from_json(json)
# print the JSON string representation of the object
print(MetadataSupportedValueDetail.to_json())

# convert the object into a dict
metadata_supported_value_detail_dict = metadata_supported_value_detail_instance.to_dict()
# create an instance of MetadataSupportedValueDetail from a dict
metadata_supported_value_detail_from_dict = MetadataSupportedValueDetail.from_dict(metadata_supported_value_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


