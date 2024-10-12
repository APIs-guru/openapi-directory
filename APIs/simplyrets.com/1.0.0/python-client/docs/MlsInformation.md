# MlsInformation

RETS MLS Vendor Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | MLS Area major. The major marketing area name, as defined by the MLS or other non-governmental organization. | [optional] 
**area_minor** | **str** | MLS Area minor. The minor/sub marketing area name, as defined by the MLS or other non-governmental organization. | [optional] 
**days_on_market** | **int** | Amount of days the property has been Active | [optional] 
**originating_system_name** | **str** | Alias for the listing office or brokerage  This field corresponds to the data-dictionary &#x60;OriginatingSystemName&#x60; field  The name of the originating record provider.  Most commonly the name of the MLS. The place where the listing is originally input by the member.  The legal name of the company.  To be used for display.  If you&#39;re RETS provider aggregates feeds from multiple MLS&#39;s, this will be the name of the corresponding MLS.  | [optional] 
**status** | **str** | Normalized MLS Status Code. Compliant with data dictionary v1.3 ListingStatus Listing statuses depend on your MLS&#39;s availability. Below is a brief description of each status with possible synonyms which may map to your MLS-specific statuses  - Active: Active Listing which is still on the market - ActiveUnderContract: An offer has been accepted but the listing is still on market. Synonyms: Accepting Backup Offers, Backup Offer, Active With Accepted. Synonyms: Offer, Backup, Contingent - Pending: An offer has been accepted and the listing is no longer on market. Synonyms: Offer Accepted, Under Contract - Hold: The listing has been withdrawn from the market, but a contract   still exists between the seller and the listing member. Synonyms: Hold, Hold Do Not Show, Temp Off Market - Withdrawn: The listing has been withdrawn from the market, but a contract   still exists between the seller and the listing member. Synonyms: Hold, Hold Do Not Show, Temp Off Market - Closed: The purchase agreement has been fulfilled or the lease   agreement has been executed. Synonyms: Sold, Leased, Rented, Closed Sale - Expired: The listing contract has expired - Delete: The listing contract was never valid or other reason for the contract to be nullified. Synonyms: Kill, Zap - Incomplete: The listing has not yet be completely entered and is not yet   published in the MLS. Synonyms: Draft, Partially Complted - ComingSoon  | [optional] 
**status_text** | **str** | Raw MLS status text. This &#x60;field&#x60; comes directly from your RETS data field and is not normalized.  | [optional] 

## Example

```python
from openapi_client.models.mls_information import MlsInformation

# TODO update the JSON string below
json = "{}"
# create an instance of MlsInformation from a JSON string
mls_information_instance = MlsInformation.from_json(json)
# print the JSON string representation of the object
print(MlsInformation.to_json())

# convert the object into a dict
mls_information_dict = mls_information_instance.to_dict()
# create an instance of MlsInformation from a dict
mls_information_from_dict = MlsInformation.from_dict(mls_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


