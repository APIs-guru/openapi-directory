# IdentityDocumentObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The ISO-3166-alpha3 country code of the issuing national. Once set, this cannot be changed.  See https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes for more  | 
**created_from_scan** | **bool** | This document&#39;s data was initially created from scanned and processed images. The value cannot be set manually and any attempt to do so will just be ignored.  | [optional] [readonly] 
**doc_scan** | [**List[ScannedDocumentObject]**](ScannedDocumentObject.md) | Collection of one or more objects that describe scan(s) that need to be put through OCR or facial recognition. These should all be from the one ID document, such as front/back, or page 1, 2, 3, etc. You can upload multiple scans in a single call, or in multiple calls.     Note: if you do upload over multiple calls, make sure you include the documentId (see above), and indicate that this is happening with a \&quot;more_data\&quot; checkAction  | [optional] 
**document_id** | **str** | When an ID document is created/uploaded, it is assigned a documentId. You&#39;ll see this in a successful response or successfully accepted response. This can then be referenced in subsequent calls if you&#39;re uploading more/updated data.  | [optional] 
**document_status** | [**EnumDocumentStatus**](EnumDocumentStatus.md) |  | [optional] 
**extra_data** | [**List[KeyValuePairObject]**](KeyValuePairObject.md) | Set of key-value pairs that provide ID type-specific data. If updating an existing document, then existing values with the same name will be overwritten. New values will be added.  If this document is scanned through OCR or similar processes, then extracted data will be found here (Some may be used to populate other fields like idNumber and idExpiry as well)  | [optional] 
**id_expiry** | **date** | The expiry date of the document (if known) in YYYY-MM-DD format. | [optional] 
**id_issued** | **date** | The issued date of the document (if known) in YYYY-MM-DD format. | [optional] 
**id_number** | **str** | The ID number of the document (if known). | [optional] 
**id_sub_type** | **str** | The sub-type of identity document. Very document specific. | [optional] 
**id_type** | [**EnumIdType**](EnumIdType.md) |  | 
**manually_modified** | **bool** | If this document was originally populated from scanned data, then manually adjusted (e.g. if the scan&#39;s results weren&#39;t 100% correct or data was missing), then this will be set to true. The value cannot be set manually and any attempt to do so will just be ignored.  | [optional] [readonly] 
**region** | **str** | Regional variant of the ID (e.g. VIC drivers licence)  You should always use the local abbreviation for this. E.g.   - VIC for The Australian state of Victoria   - MA for the US state of Massachusetts   - etc  | [optional] 

## Example

```python
from openapi_client.models.identity_document_object import IdentityDocumentObject

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityDocumentObject from a JSON string
identity_document_object_instance = IdentityDocumentObject.from_json(json)
# print the JSON string representation of the object
print(IdentityDocumentObject.to_json())

# convert the object into a dict
identity_document_object_dict = identity_document_object_instance.to_dict()
# create an instance of IdentityDocumentObject from a dict
identity_document_object_from_dict = IdentityDocumentObject.from_dict(identity_document_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


