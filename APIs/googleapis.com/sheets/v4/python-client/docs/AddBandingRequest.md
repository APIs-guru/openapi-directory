# AddBandingRequest

Adds a new banded range to the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banded_range** | [**BandedRange**](BandedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_banding_request import AddBandingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddBandingRequest from a JSON string
add_banding_request_instance = AddBandingRequest.from_json(json)
# print the JSON string representation of the object
print(AddBandingRequest.to_json())

# convert the object into a dict
add_banding_request_dict = add_banding_request_instance.to_dict()
# create an instance of AddBandingRequest from a dict
add_banding_request_from_dict = AddBandingRequest.from_dict(add_banding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


