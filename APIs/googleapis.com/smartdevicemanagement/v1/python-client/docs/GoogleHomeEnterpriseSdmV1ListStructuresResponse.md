# GoogleHomeEnterpriseSdmV1ListStructuresResponse

Response message for SmartDeviceManagementService.ListStructures

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**structures** | [**List[GoogleHomeEnterpriseSdmV1Structure]**](GoogleHomeEnterpriseSdmV1Structure.md) | The list of structures. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_list_structures_response import GoogleHomeEnterpriseSdmV1ListStructuresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1ListStructuresResponse from a JSON string
google_home_enterprise_sdm_v1_list_structures_response_instance = GoogleHomeEnterpriseSdmV1ListStructuresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1ListStructuresResponse.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_list_structures_response_dict = google_home_enterprise_sdm_v1_list_structures_response_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1ListStructuresResponse from a dict
google_home_enterprise_sdm_v1_list_structures_response_from_dict = GoogleHomeEnterpriseSdmV1ListStructuresResponse.from_dict(google_home_enterprise_sdm_v1_list_structures_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


