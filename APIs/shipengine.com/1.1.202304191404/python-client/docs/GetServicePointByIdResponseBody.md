# GetServicePointByIdResponseBody

A get service point by ID response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_point** | [**GetServicePointByIdResponseBodyServicePoint**](GetServicePointByIdResponseBodyServicePoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_service_point_by_id_response_body import GetServicePointByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointByIdResponseBody from a JSON string
get_service_point_by_id_response_body_instance = GetServicePointByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetServicePointByIdResponseBody.to_json())

# convert the object into a dict
get_service_point_by_id_response_body_dict = get_service_point_by_id_response_body_instance.to_dict()
# create an instance of GetServicePointByIdResponseBody from a dict
get_service_point_by_id_response_body_from_dict = GetServicePointByIdResponseBody.from_dict(get_service_point_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


