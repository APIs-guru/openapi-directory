# Listing

RETS MLS Listing Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**StreetAddress**](StreetAddress.md) |  | [optional] 
**agent** | [**Agent**](Agent.md) |  | [optional] 
**association** | [**Association**](Association.md) |  | [optional] 
**co_agent** | [**Agent**](Agent.md) |  | [optional] 
**disclaimer** | **str** | Data accuracy disclaimer. The value in the disclaimer may change depending on your MLS vendors rules.  | [optional] 
**geo** | [**GeographicData**](GeographicData.md) |  | [optional] 
**lease_term** | **str** | Represents the length of the lease. | [optional] 
**lease_type** | **str** | Information about the status of the existing lease on the property. | [optional] 
**list_date** | **datetime** | Date and time the listing became Active | [optional] 
**list_price** | **float** | Price of the listing | [optional] 
**listing_id** | **str** | Data Dictionary v1.3 ListingId. The well known identifier for the listing. The value is the id or number by the MLS as a public identifier for the listing.  This identifier should not be confused with the &#x60;mlsId&#x60;, which is specific to the SimplyRETS API.  | [optional] 
**mls** | [**MlsInformation**](MlsInformation.md) |  | [optional] 
**mls_id** | **int** | A unique identifier for this listing specific to the SimplyRETS API. Thie identifier is specific to the SimplyRETS api and has no correlation with the MLS number. Use this id when making requests to the single listing endpoint (eg, &#x60;/properties/{mlsId}&#x60;).  Applications should not rely on specific &#x60;mlsId&#x60;s being present. Instead, apps should dynamically use the &#x60;mlsId&#x60; after using other more general query parameters. Many mls vendors require listings which are expired, terminated or sold to be purged, which will render calls to specific &#x60;mlsId&#x60;s to return nothing (or possibly a 404).  | [optional] 
**modified** | **datetime** | Date and time of the last modification | [optional] 
**office** | [**Office**](Office.md) |  | [optional] 
**photos** | **List[str]** | Photos of the property. Images are served over https and are suitable for production use on secure websites  | [optional] 
**private_remarks** | **str** | Agent only remarks | [optional] 
**var_property** | [**ModelProperty**](ModelProperty.md) |  | [optional] 
**remarks** | **str** | Description or remarks | [optional] 
**sales** | [**Sales**](Sales.md) |  | [optional] 
**school** | [**School**](School.md) |  | [optional] 
**showing_instructions** | **str** | Public instructions for showing the property. | [optional] 
**tax** | [**Tax**](Tax.md) |  | [optional] 
**virtual_tour_url** | **str** | The URL for an unbranded virtual tour of the property.  **Added on 2016/05/04 - Not available for all RETS vendors**  | [optional] 

## Example

```python
from openapi_client.models.listing import Listing

# TODO update the JSON string below
json = "{}"
# create an instance of Listing from a JSON string
listing_instance = Listing.from_json(json)
# print the JSON string representation of the object
print(Listing.to_json())

# convert the object into a dict
listing_dict = listing_instance.to_dict()
# create an instance of Listing from a dict
listing_from_dict = Listing.from_dict(listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


