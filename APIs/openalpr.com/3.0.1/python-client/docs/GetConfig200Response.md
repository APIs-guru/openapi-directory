# GetConfig200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**List[GetConfig200ResponseCountriesInner]**](GetConfig200ResponseCountriesInner.md) |  | [optional] 
**vehicle_labels** | [**GetConfig200ResponseVehicleLabels**](GetConfig200ResponseVehicleLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_config200_response import GetConfig200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetConfig200Response from a JSON string
get_config200_response_instance = GetConfig200Response.from_json(json)
# print the JSON string representation of the object
print(GetConfig200Response.to_json())

# convert the object into a dict
get_config200_response_dict = get_config200_response_instance.to_dict()
# create an instance of GetConfig200Response from a dict
get_config200_response_from_dict = GetConfig200Response.from_dict(get_config200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


