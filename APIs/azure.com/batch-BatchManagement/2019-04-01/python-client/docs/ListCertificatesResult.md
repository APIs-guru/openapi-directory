# ListCertificatesResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] 
**value** | [**List[Certificate]**](Certificate.md) | The collection of returned certificates. | [optional] 

## Example

```python
from openapi_client.models.list_certificates_result import ListCertificatesResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificatesResult from a JSON string
list_certificates_result_instance = ListCertificatesResult.from_json(json)
# print the JSON string representation of the object
print(ListCertificatesResult.to_json())

# convert the object into a dict
list_certificates_result_dict = list_certificates_result_instance.to_dict()
# create an instance of ListCertificatesResult from a dict
list_certificates_result_from_dict = ListCertificatesResult.from_dict(list_certificates_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


