# CheckPrivateLinkServiceVisibilityRequest

Request body of the CheckPrivateLinkServiceVisibility API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_link_service_alias** | **str** | The alias of the private link service. | [optional] 

## Example

```python
from openapi_client.models.check_private_link_service_visibility_request import CheckPrivateLinkServiceVisibilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPrivateLinkServiceVisibilityRequest from a JSON string
check_private_link_service_visibility_request_instance = CheckPrivateLinkServiceVisibilityRequest.from_json(json)
# print the JSON string representation of the object
print(CheckPrivateLinkServiceVisibilityRequest.to_json())

# convert the object into a dict
check_private_link_service_visibility_request_dict = check_private_link_service_visibility_request_instance.to_dict()
# create an instance of CheckPrivateLinkServiceVisibilityRequest from a dict
check_private_link_service_visibility_request_from_dict = CheckPrivateLinkServiceVisibilityRequest.from_dict(check_private_link_service_visibility_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


