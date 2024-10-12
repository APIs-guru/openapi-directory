# RegionListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**RegionListByServiceDefaultResponseError**](RegionListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.region_list_by_service_default_response import RegionListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegionListByServiceDefaultResponse from a JSON string
region_list_by_service_default_response_instance = RegionListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(RegionListByServiceDefaultResponse.to_json())

# convert the object into a dict
region_list_by_service_default_response_dict = region_list_by_service_default_response_instance.to_dict()
# create an instance of RegionListByServiceDefaultResponse from a dict
region_list_by_service_default_response_from_dict = RegionListByServiceDefaultResponse.from_dict(region_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


