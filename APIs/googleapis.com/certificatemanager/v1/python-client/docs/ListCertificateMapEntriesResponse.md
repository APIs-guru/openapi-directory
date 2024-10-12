# ListCertificateMapEntriesResponse

Response for the `ListCertificateMapEntries` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_map_entries** | [**List[CertificateMapEntry]**](CertificateMapEntry.md) | A list of certificate map entries for the parent resource. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_certificate_map_entries_response import ListCertificateMapEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificateMapEntriesResponse from a JSON string
list_certificate_map_entries_response_instance = ListCertificateMapEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCertificateMapEntriesResponse.to_json())

# convert the object into a dict
list_certificate_map_entries_response_dict = list_certificate_map_entries_response_instance.to_dict()
# create an instance of ListCertificateMapEntriesResponse from a dict
list_certificate_map_entries_response_from_dict = ListCertificateMapEntriesResponse.from_dict(list_certificate_map_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


