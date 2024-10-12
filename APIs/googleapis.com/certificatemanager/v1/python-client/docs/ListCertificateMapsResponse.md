# ListCertificateMapsResponse

Response for the `ListCertificateMaps` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_maps** | [**List[CertificateMap]**](CertificateMap.md) | A list of certificate maps for the parent resource. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_certificate_maps_response import ListCertificateMapsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificateMapsResponse from a JSON string
list_certificate_maps_response_instance = ListCertificateMapsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCertificateMapsResponse.to_json())

# convert the object into a dict
list_certificate_maps_response_dict = list_certificate_maps_response_instance.to_dict()
# create an instance of ListCertificateMapsResponse from a dict
list_certificate_maps_response_from_dict = ListCertificateMapsResponse.from_dict(list_certificate_maps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


