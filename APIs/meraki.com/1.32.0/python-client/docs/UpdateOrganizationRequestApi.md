# UpdateOrganizationRequestApi

API-specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If true, enable the access to the Cisco Meraki Dashboard API | [optional] 

## Example

```python
from openapi_client.models.update_organization_request_api import UpdateOrganizationRequestApi

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationRequestApi from a JSON string
update_organization_request_api_instance = UpdateOrganizationRequestApi.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationRequestApi.to_json())

# convert the object into a dict
update_organization_request_api_dict = update_organization_request_api_instance.to_dict()
# create an instance of UpdateOrganizationRequestApi from a dict
update_organization_request_api_from_dict = UpdateOrganizationRequestApi.from_dict(update_organization_request_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


