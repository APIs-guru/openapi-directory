# ConversionRateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Conversion**](Conversion.md) |  | [optional] 
**var_date** | **str** | The date and time the API is being called in GMT. | [optional] 
**description** | **str** | The description of the API being called. | [optional] 
**name** | **str** | The name of the service being requested. | [optional] 
**type** | **str** | The type of response being returned by the API. | [optional] 

## Example

```python
from openapi_client.models.conversion_rate_request import ConversionRateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionRateRequest from a JSON string
conversion_rate_request_instance = ConversionRateRequest.from_json(json)
# print the JSON string representation of the object
print(ConversionRateRequest.to_json())

# convert the object into a dict
conversion_rate_request_dict = conversion_rate_request_instance.to_dict()
# create an instance of ConversionRateRequest from a dict
conversion_rate_request_from_dict = ConversionRateRequest.from_dict(conversion_rate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


