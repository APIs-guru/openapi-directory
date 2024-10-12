# GetCarrierOptionsResponseBody

A carrier list options response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[CarrierAdvancedOption]**](CarrierAdvancedOption.md) | AN array of carrier options | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_carrier_options_response_body import GetCarrierOptionsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetCarrierOptionsResponseBody from a JSON string
get_carrier_options_response_body_instance = GetCarrierOptionsResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetCarrierOptionsResponseBody.to_json())

# convert the object into a dict
get_carrier_options_response_body_dict = get_carrier_options_response_body_instance.to_dict()
# create an instance of GetCarrierOptionsResponseBody from a dict
get_carrier_options_response_body_from_dict = GetCarrierOptionsResponseBody.from_dict(get_carrier_options_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


