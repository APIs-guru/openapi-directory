# ListCertificatesResponse

Response for the `ListCertificates` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**List[Certificate]**](Certificate.md) | A list of certificates for the parent resource. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_certificates_response import ListCertificatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificatesResponse from a JSON string
list_certificates_response_instance = ListCertificatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCertificatesResponse.to_json())

# convert the object into a dict
list_certificates_response_dict = list_certificates_response_instance.to_dict()
# create an instance of ListCertificatesResponse from a dict
list_certificates_response_from_dict = ListCertificatesResponse.from_dict(list_certificates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


