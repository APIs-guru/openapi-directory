# VerifyListingsRequest

Request message for VRPartnerListingVerificationService.VerifyPartnerListings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xml_listing** | **str** | A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed. | [optional] 

## Example

```python
from openapi_client.models.verify_listings_request import VerifyListingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyListingsRequest from a JSON string
verify_listings_request_instance = VerifyListingsRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyListingsRequest.to_json())

# convert the object into a dict
verify_listings_request_dict = verify_listings_request_instance.to_dict()
# create an instance of VerifyListingsRequest from a dict
verify_listings_request_from_dict = VerifyListingsRequest.from_dict(verify_listings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


