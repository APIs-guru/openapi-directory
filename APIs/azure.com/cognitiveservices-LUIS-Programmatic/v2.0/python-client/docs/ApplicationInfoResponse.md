# ApplicationInfoResponse

Response containing the Application Info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_version** | **str** | The version ID currently marked as active. | [optional] 
**created_date_time** | **str** | The version&#39;s creation timestamp. | [optional] 
**culture** | **str** | The culture of the application. E.g.: en-us. | [optional] 
**description** | **str** | The description of the application. | [optional] 
**domain** | **str** | The domain for the new application. Optional. E.g.: Comics. | [optional] 
**endpoint_hits_count** | **int** | Number of calls made to this endpoint. | [optional] 
**endpoints** | **object** | The Runtime endpoint URL for this model version. | [optional] 
**id** | **str** | The ID (GUID) of the application. | [optional] 
**name** | **str** | The name of the application. | [optional] 
**usage_scenario** | **str** | Defines the scenario for the new application. Optional. E.g.: IoT. | [optional] 
**versions_count** | **int** | Amount of model versions within the application. | [optional] 

## Example

```python
from openapi_client.models.application_info_response import ApplicationInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInfoResponse from a JSON string
application_info_response_instance = ApplicationInfoResponse.from_json(json)
# print the JSON string representation of the object
print(ApplicationInfoResponse.to_json())

# convert the object into a dict
application_info_response_dict = application_info_response_instance.to_dict()
# create an instance of ApplicationInfoResponse from a dict
application_info_response_from_dict = ApplicationInfoResponse.from_dict(application_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


