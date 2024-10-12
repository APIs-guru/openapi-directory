# UpdateOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**UpdateOrganizationRequestApi**](UpdateOrganizationRequestApi.md) |  | [optional] 
**management** | [**GetOrganizations200ResponseInnerManagement**](GetOrganizations200ResponseInnerManagement.md) |  | [optional] 
**name** | **str** | The name of the organization | [optional] 

## Example

```python
from openapi_client.models.update_organization_request import UpdateOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationRequest from a JSON string
update_organization_request_instance = UpdateOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationRequest.to_json())

# convert the object into a dict
update_organization_request_dict = update_organization_request_instance.to_dict()
# create an instance of UpdateOrganizationRequest from a dict
update_organization_request_from_dict = UpdateOrganizationRequest.from_dict(update_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


