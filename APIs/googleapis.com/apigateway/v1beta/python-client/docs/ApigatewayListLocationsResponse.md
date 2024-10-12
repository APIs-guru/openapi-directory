# ApigatewayListLocationsResponse

The response message for Locations.ListLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[ApigatewayLocation]**](ApigatewayLocation.md) | A list of locations that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.apigateway_list_locations_response import ApigatewayListLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayListLocationsResponse from a JSON string
apigateway_list_locations_response_instance = ApigatewayListLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(ApigatewayListLocationsResponse.to_json())

# convert the object into a dict
apigateway_list_locations_response_dict = apigateway_list_locations_response_instance.to_dict()
# create an instance of ApigatewayListLocationsResponse from a dict
apigateway_list_locations_response_from_dict = ApigatewayListLocationsResponse.from_dict(apigateway_list_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


