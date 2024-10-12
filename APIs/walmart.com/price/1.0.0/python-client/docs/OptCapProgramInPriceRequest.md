# OptCapProgramInPriceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subsidy_enrolled** | **bool** | A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program | [optional] 
**subsidy_preference** | **bool** | A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting | [optional] 

## Example

```python
from openapi_client.models.opt_cap_program_in_price_request import OptCapProgramInPriceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OptCapProgramInPriceRequest from a JSON string
opt_cap_program_in_price_request_instance = OptCapProgramInPriceRequest.from_json(json)
# print the JSON string representation of the object
print(OptCapProgramInPriceRequest.to_json())

# convert the object into a dict
opt_cap_program_in_price_request_dict = opt_cap_program_in_price_request_instance.to_dict()
# create an instance of OptCapProgramInPriceRequest from a dict
opt_cap_program_in_price_request_from_dict = OptCapProgramInPriceRequest.from_dict(opt_cap_program_in_price_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


