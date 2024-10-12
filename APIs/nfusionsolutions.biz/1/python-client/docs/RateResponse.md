# RateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Rate**](Rate.md) |  | [optional] 
**error** | **str** |  | [optional] 
**requested_currency** | **str** |  | [optional] 
**requested_symbol** | **str** |  | [optional] 
**requested_unit_of_measure** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.rate_response import RateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RateResponse from a JSON string
rate_response_instance = RateResponse.from_json(json)
# print the JSON string representation of the object
print(RateResponse.to_json())

# convert the object into a dict
rate_response_dict = rate_response_instance.to_dict()
# create an instance of RateResponse from a dict
rate_response_from_dict = RateResponse.from_dict(rate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


