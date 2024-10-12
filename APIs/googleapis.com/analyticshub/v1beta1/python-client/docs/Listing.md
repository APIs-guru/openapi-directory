# Listing

A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_dataset** | [**BigQueryDatasetSource**](BigQueryDatasetSource.md) |  | [optional] 
**categories** | **List[str]** | Optional. Categories of the listing. Up to two categories are allowed. | [optional] 
**data_provider** | [**DataProvider**](DataProvider.md) |  | [optional] 
**description** | **str** | Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. | [optional] 
**display_name** | **str** | Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&amp;) and can&#39;t start or end with spaces. Default value is an empty string. Max length: 63 bytes. | [optional] 
**documentation** | **str** | Optional. Documentation describing the listing. | [optional] 
**icon** | **bytearray** | Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. | [optional] 
**name** | **str** | Output only. The resource name of the listing. e.g. &#x60;projects/myproject/locations/US/dataExchanges/123/listings/456&#x60; | [optional] [readonly] 
**primary_contact** | **str** | Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes. | [optional] 
**publisher** | [**Publisher**](Publisher.md) |  | [optional] 
**request_access** | **str** | Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes. | [optional] 
**restricted_export_config** | [**RestrictedExportConfig**](RestrictedExportConfig.md) |  | [optional] 
**state** | **str** | Output only. Current state of the listing. | [optional] [readonly] 

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


