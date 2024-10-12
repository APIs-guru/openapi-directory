# ListShaCertificatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**List[ShaCertificate]**](ShaCertificate.md) | The list of each &#x60;ShaCertificate&#x60; associated with the &#x60;AndroidApp&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_sha_certificates_response import ListShaCertificatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListShaCertificatesResponse from a JSON string
list_sha_certificates_response_instance = ListShaCertificatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListShaCertificatesResponse.to_json())

# convert the object into a dict
list_sha_certificates_response_dict = list_sha_certificates_response_instance.to_dict()
# create an instance of ListShaCertificatesResponse from a dict
list_sha_certificates_response_from_dict = ListShaCertificatesResponse.from_dict(list_sha_certificates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


