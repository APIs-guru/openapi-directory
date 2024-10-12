# AirportResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_resource** | [**AirportResource**](AirportResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.airport_response import AirportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AirportResponse from a JSON string
airport_response_instance = AirportResponse.from_json(json)
# print the JSON string representation of the object
print(AirportResponse.to_json())

# convert the object into a dict
airport_response_dict = airport_response_instance.to_dict()
# create an instance of AirportResponse from a dict
airport_response_from_dict = AirportResponse.from_dict(airport_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


