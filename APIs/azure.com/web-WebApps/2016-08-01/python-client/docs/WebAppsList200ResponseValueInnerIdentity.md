# WebAppsList200ResponseValueInnerIdentity

Managed service identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | Principal Id of managed service identity. | [optional] [readonly] 
**tenant_id** | **str** | Tenant of managed service identity. | [optional] [readonly] 
**type** | **str** | Type of managed service identity. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_identity import WebAppsList200ResponseValueInnerIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerIdentity from a JSON string
web_apps_list200_response_value_inner_identity_instance = WebAppsList200ResponseValueInnerIdentity.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerIdentity.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_identity_dict = web_apps_list200_response_value_inner_identity_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerIdentity from a dict
web_apps_list200_response_value_inner_identity_from_dict = WebAppsList200ResponseValueInnerIdentity.from_dict(web_apps_list200_response_value_inner_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


