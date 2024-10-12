# MetadataListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**view_template** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.metadata_list_response_inner import MetadataListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataListResponseInner from a JSON string
metadata_list_response_inner_instance = MetadataListResponseInner.from_json(json)
# print the JSON string representation of the object
print(MetadataListResponseInner.to_json())

# convert the object into a dict
metadata_list_response_inner_dict = metadata_list_response_inner_instance.to_dict()
# create an instance of MetadataListResponseInner from a dict
metadata_list_response_inner_from_dict = MetadataListResponseInner.from_dict(metadata_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


