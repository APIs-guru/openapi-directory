# AppInfoUpdateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_category** | [**AppInfoUpdateRequestDataRelationshipsPrimaryCategory**](AppInfoUpdateRequestDataRelationshipsPrimaryCategory.md) |  | [optional] 
**primary_subcategory_one** | [**AppInfoUpdateRequestDataRelationshipsPrimaryCategory**](AppInfoUpdateRequestDataRelationshipsPrimaryCategory.md) |  | [optional] 
**primary_subcategory_two** | [**AppInfoUpdateRequestDataRelationshipsPrimaryCategory**](AppInfoUpdateRequestDataRelationshipsPrimaryCategory.md) |  | [optional] 
**secondary_category** | [**AppInfoUpdateRequestDataRelationshipsPrimaryCategory**](AppInfoUpdateRequestDataRelationshipsPrimaryCategory.md) |  | [optional] 
**secondary_subcategory_one** | [**AppInfoUpdateRequestDataRelationshipsPrimaryCategory**](AppInfoUpdateRequestDataRelationshipsPrimaryCategory.md) |  | [optional] 
**secondary_subcategory_two** | [**AppInfoUpdateRequestDataRelationshipsPrimaryCategory**](AppInfoUpdateRequestDataRelationshipsPrimaryCategory.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_info_update_request_data_relationships import AppInfoUpdateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoUpdateRequestDataRelationships from a JSON string
app_info_update_request_data_relationships_instance = AppInfoUpdateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(AppInfoUpdateRequestDataRelationships.to_json())

# convert the object into a dict
app_info_update_request_data_relationships_dict = app_info_update_request_data_relationships_instance.to_dict()
# create an instance of AppInfoUpdateRequestDataRelationships from a dict
app_info_update_request_data_relationships_from_dict = AppInfoUpdateRequestDataRelationships.from_dict(app_info_update_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


