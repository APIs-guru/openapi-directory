# UpdateBandingRequest

Updates properties of the supplied banded range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banded_range** | [**BandedRange**](BandedRange.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;bandedRange&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 

## Example

```python
from openapi_client.models.update_banding_request import UpdateBandingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBandingRequest from a JSON string
update_banding_request_instance = UpdateBandingRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBandingRequest.to_json())

# convert the object into a dict
update_banding_request_dict = update_banding_request_instance.to_dict()
# create an instance of UpdateBandingRequest from a dict
update_banding_request_from_dict = UpdateBandingRequest.from_dict(update_banding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


