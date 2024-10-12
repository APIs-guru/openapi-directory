# OptCapProgramInPrice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mart_id** | **str** | A unique ID that a user or seller uses for a marketplace. | [optional] 
**status_info** | [**OptCapProgramInPriceRequest**](OptCapProgramInPriceRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.opt_cap_program_in_price200_response import OptCapProgramInPrice200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OptCapProgramInPrice200Response from a JSON string
opt_cap_program_in_price200_response_instance = OptCapProgramInPrice200Response.from_json(json)
# print the JSON string representation of the object
print(OptCapProgramInPrice200Response.to_json())

# convert the object into a dict
opt_cap_program_in_price200_response_dict = opt_cap_program_in_price200_response_instance.to_dict()
# create an instance of OptCapProgramInPrice200Response from a dict
opt_cap_program_in_price200_response_from_dict = OptCapProgramInPrice200Response.from_dict(opt_cap_program_in_price200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


