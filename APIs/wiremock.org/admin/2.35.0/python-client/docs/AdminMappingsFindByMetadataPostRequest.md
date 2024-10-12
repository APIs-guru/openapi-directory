# AdminMappingsFindByMetadataPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_insensitive** | **bool** |  | [optional] 
**equal_to** | **bool** |  | 
**contains** | **str** |  | 
**matches** | **str** |  | 
**does_not_match** | **str** |  | 
**equal_to_json** | **str** |  | 
**ignore_array_order** | **bool** |  | [optional] 
**ignore_extra_elements** | **bool** |  | [optional] 
**matches_json_path** | **str** |  | 
**equal_to_xml** | **str** |  | 
**matches_xpath** | **str** |  | 
**namespaces** | **object** |  | [optional] 
**value_pattern** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.admin_mappings_find_by_metadata_post_request import AdminMappingsFindByMetadataPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdminMappingsFindByMetadataPostRequest from a JSON string
admin_mappings_find_by_metadata_post_request_instance = AdminMappingsFindByMetadataPostRequest.from_json(json)
# print the JSON string representation of the object
print(AdminMappingsFindByMetadataPostRequest.to_json())

# convert the object into a dict
admin_mappings_find_by_metadata_post_request_dict = admin_mappings_find_by_metadata_post_request_instance.to_dict()
# create an instance of AdminMappingsFindByMetadataPostRequest from a dict
admin_mappings_find_by_metadata_post_request_from_dict = AdminMappingsFindByMetadataPostRequest.from_dict(admin_mappings_find_by_metadata_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


