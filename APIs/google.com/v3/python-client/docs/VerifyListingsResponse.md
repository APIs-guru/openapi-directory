# VerifyListingsResponse

Response message for VRPartnerListingVerificationService.VerifyPartnerListings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parsed_listing** | [**ParsedListing**](ParsedListing.md) |  | [optional] 

## Example

```python
from openapi_client.models.verify_listings_response import VerifyListingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyListingsResponse from a JSON string
verify_listings_response_instance = VerifyListingsResponse.from_json(json)
# print the JSON string representation of the object
print(VerifyListingsResponse.to_json())

# convert the object into a dict
verify_listings_response_dict = verify_listings_response_instance.to_dict()
# create an instance of VerifyListingsResponse from a dict
verify_listings_response_from_dict = VerifyListingsResponse.from_dict(verify_listings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


