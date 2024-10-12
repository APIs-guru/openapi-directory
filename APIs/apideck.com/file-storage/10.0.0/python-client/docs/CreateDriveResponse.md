# CreateDriveResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_drive_response import CreateDriveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDriveResponse from a JSON string
create_drive_response_instance = CreateDriveResponse.from_json(json)
# print the JSON string representation of the object
print(CreateDriveResponse.to_json())

# convert the object into a dict
create_drive_response_dict = create_drive_response_instance.to_dict()
# create an instance of CreateDriveResponse from a dict
create_drive_response_from_dict = CreateDriveResponse.from_dict(create_drive_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


