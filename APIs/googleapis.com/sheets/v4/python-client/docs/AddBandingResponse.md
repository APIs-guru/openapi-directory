# AddBandingResponse

The result of adding a banded range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banded_range** | [**BandedRange**](BandedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_banding_response import AddBandingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddBandingResponse from a JSON string
add_banding_response_instance = AddBandingResponse.from_json(json)
# print the JSON string representation of the object
print(AddBandingResponse.to_json())

# convert the object into a dict
add_banding_response_dict = add_banding_response_instance.to_dict()
# create an instance of AddBandingResponse from a dict
add_banding_response_from_dict = AddBandingResponse.from_dict(add_banding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


