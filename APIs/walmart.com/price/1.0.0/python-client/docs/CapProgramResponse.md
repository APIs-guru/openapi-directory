# CapProgramResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mart_id** | **str** | A unique ID that a user or seller uses for a marketplace. | [optional] 
**status_info** | [**OptCapProgramInPriceRequest**](OptCapProgramInPriceRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.cap_program_response import CapProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CapProgramResponse from a JSON string
cap_program_response_instance = CapProgramResponse.from_json(json)
# print the JSON string representation of the object
print(CapProgramResponse.to_json())

# convert the object into a dict
cap_program_response_dict = cap_program_response_instance.to_dict()
# create an instance of CapProgramResponse from a dict
cap_program_response_from_dict = CapProgramResponse.from_dict(cap_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


