# GetOrganizationSmApnsCert200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | Organization APNS Certificate used by devices to communication with Apple | [optional] 

## Example

```python
from openapi_client.models.get_organization_sm_apns_cert200_response import GetOrganizationSmApnsCert200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSmApnsCert200Response from a JSON string
get_organization_sm_apns_cert200_response_instance = GetOrganizationSmApnsCert200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSmApnsCert200Response.to_json())

# convert the object into a dict
get_organization_sm_apns_cert200_response_dict = get_organization_sm_apns_cert200_response_instance.to_dict()
# create an instance of GetOrganizationSmApnsCert200Response from a dict
get_organization_sm_apns_cert200_response_from_dict = GetOrganizationSmApnsCert200Response.from_dict(get_organization_sm_apns_cert200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


