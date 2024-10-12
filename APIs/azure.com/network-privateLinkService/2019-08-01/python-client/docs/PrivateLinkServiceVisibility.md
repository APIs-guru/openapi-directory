# PrivateLinkServiceVisibility

Response for the CheckPrivateLinkServiceVisibility API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visible** | **bool** | Private Link Service Visibility (True/False). | [optional] 

## Example

```python
from openapi_client.models.private_link_service_visibility import PrivateLinkServiceVisibility

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceVisibility from a JSON string
private_link_service_visibility_instance = PrivateLinkServiceVisibility.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceVisibility.to_json())

# convert the object into a dict
private_link_service_visibility_dict = private_link_service_visibility_instance.to_dict()
# create an instance of PrivateLinkServiceVisibility from a dict
private_link_service_visibility_from_dict = PrivateLinkServiceVisibility.from_dict(private_link_service_visibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


