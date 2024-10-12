# ApiPublicV1MaintenancemodeStartPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Routing keys that maintenance mode state covers. An empty list indicates global maintenance mode | [optional] 
**purpose** | **str** | the reason for the maintenance mode | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_public_v1_maintenancemode_start_post_request import ApiPublicV1MaintenancemodeStartPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPublicV1MaintenancemodeStartPostRequest from a JSON string
api_public_v1_maintenancemode_start_post_request_instance = ApiPublicV1MaintenancemodeStartPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiPublicV1MaintenancemodeStartPostRequest.to_json())

# convert the object into a dict
api_public_v1_maintenancemode_start_post_request_dict = api_public_v1_maintenancemode_start_post_request_instance.to_dict()
# create an instance of ApiPublicV1MaintenancemodeStartPostRequest from a dict
api_public_v1_maintenancemode_start_post_request_from_dict = ApiPublicV1MaintenancemodeStartPostRequest.from_dict(api_public_v1_maintenancemode_start_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


