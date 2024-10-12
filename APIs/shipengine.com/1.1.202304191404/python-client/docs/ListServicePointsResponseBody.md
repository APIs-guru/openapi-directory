# ListServicePointsResponseBody

A list service points response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [optional] [readonly] 
**lat** | **float** |  | [optional] 
**long** | **float** |  | [optional] 
**service_points** | [**List[ListServicePointsResponseBodyServicePointsInner]**](ListServicePointsResponseBodyServicePointsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_service_points_response_body import ListServicePointsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListServicePointsResponseBody from a JSON string
list_service_points_response_body_instance = ListServicePointsResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListServicePointsResponseBody.to_json())

# convert the object into a dict
list_service_points_response_body_dict = list_service_points_response_body_instance.to_dict()
# create an instance of ListServicePointsResponseBody from a dict
list_service_points_response_body_from_dict = ListServicePointsResponseBody.from_dict(list_service_points_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


