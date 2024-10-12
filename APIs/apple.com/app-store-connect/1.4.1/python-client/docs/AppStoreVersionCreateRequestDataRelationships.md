# AppStoreVersionCreateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppPreOrderCreateRequestDataRelationshipsApp**](AppPreOrderCreateRequestDataRelationshipsApp.md) |  | 
**build** | [**AppStoreVersionCreateRequestDataRelationshipsBuild**](AppStoreVersionCreateRequestDataRelationshipsBuild.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_create_request_data_relationships import AppStoreVersionCreateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionCreateRequestDataRelationships from a JSON string
app_store_version_create_request_data_relationships_instance = AppStoreVersionCreateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionCreateRequestDataRelationships.to_json())

# convert the object into a dict
app_store_version_create_request_data_relationships_dict = app_store_version_create_request_data_relationships_instance.to_dict()
# create an instance of AppStoreVersionCreateRequestDataRelationships from a dict
app_store_version_create_request_data_relationships_from_dict = AppStoreVersionCreateRequestDataRelationships.from_dict(app_store_version_create_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


