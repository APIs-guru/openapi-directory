# AppUpdateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_territories** | [**AppUpdateRequestDataRelationshipsAvailableTerritories**](AppUpdateRequestDataRelationshipsAvailableTerritories.md) |  | [optional] 
**prices** | [**AppUpdateRequestDataRelationshipsPrices**](AppUpdateRequestDataRelationshipsPrices.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_update_request_data_relationships import AppUpdateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppUpdateRequestDataRelationships from a JSON string
app_update_request_data_relationships_instance = AppUpdateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(AppUpdateRequestDataRelationships.to_json())

# convert the object into a dict
app_update_request_data_relationships_dict = app_update_request_data_relationships_instance.to_dict()
# create an instance of AppUpdateRequestDataRelationships from a dict
app_update_request_data_relationships_from_dict = AppUpdateRequestDataRelationships.from_dict(app_update_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


