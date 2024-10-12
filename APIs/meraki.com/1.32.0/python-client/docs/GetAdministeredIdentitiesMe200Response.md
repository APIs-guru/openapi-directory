# GetAdministeredIdentitiesMe200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**GetAdministeredIdentitiesMe200ResponseAuthentication**](GetAdministeredIdentitiesMe200ResponseAuthentication.md) |  | [optional] 
**email** | **str** | User email | [optional] 
**last_used_dashboard_at** | **datetime** | Last seen active on Dashboard UI | [optional] 
**name** | **str** | Username | [optional] 

## Example

```python
from openapi_client.models.get_administered_identities_me200_response import GetAdministeredIdentitiesMe200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdministeredIdentitiesMe200Response from a JSON string
get_administered_identities_me200_response_instance = GetAdministeredIdentitiesMe200Response.from_json(json)
# print the JSON string representation of the object
print(GetAdministeredIdentitiesMe200Response.to_json())

# convert the object into a dict
get_administered_identities_me200_response_dict = get_administered_identities_me200_response_instance.to_dict()
# create an instance of GetAdministeredIdentitiesMe200Response from a dict
get_administered_identities_me200_response_from_dict = GetAdministeredIdentitiesMe200Response.from_dict(get_administered_identities_me200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


