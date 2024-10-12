# GetServicePointsRequestBodyProvidersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | Uniquely identifies a carrier connection | [optional] 
**service_code** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.get_service_points_request_body_providers_inner import GetServicePointsRequestBodyProvidersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointsRequestBodyProvidersInner from a JSON string
get_service_points_request_body_providers_inner_instance = GetServicePointsRequestBodyProvidersInner.from_json(json)
# print the JSON string representation of the object
print(GetServicePointsRequestBodyProvidersInner.to_json())

# convert the object into a dict
get_service_points_request_body_providers_inner_dict = get_service_points_request_body_providers_inner_instance.to_dict()
# create an instance of GetServicePointsRequestBodyProvidersInner from a dict
get_service_points_request_body_providers_inner_from_dict = GetServicePointsRequestBodyProvidersInner.from_dict(get_service_points_request_body_providers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


