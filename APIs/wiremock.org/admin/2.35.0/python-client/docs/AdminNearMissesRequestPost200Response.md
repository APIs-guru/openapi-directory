# AdminNearMissesRequestPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**near_misses** | [**List[AdminNearMissesRequestPostRequest]**](AdminNearMissesRequestPostRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_near_misses_request_post200_response import AdminNearMissesRequestPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AdminNearMissesRequestPost200Response from a JSON string
admin_near_misses_request_post200_response_instance = AdminNearMissesRequestPost200Response.from_json(json)
# print the JSON string representation of the object
print(AdminNearMissesRequestPost200Response.to_json())

# convert the object into a dict
admin_near_misses_request_post200_response_dict = admin_near_misses_request_post200_response_instance.to_dict()
# create an instance of AdminNearMissesRequestPost200Response from a dict
admin_near_misses_request_post200_response_from_dict = AdminNearMissesRequestPost200Response.from_dict(admin_near_misses_request_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


