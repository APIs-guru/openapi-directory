# CertificateListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[Certificate]**](Certificate.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_list_result import CertificateListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListResult from a JSON string
certificate_list_result_instance = CertificateListResult.from_json(json)
# print the JSON string representation of the object
print(CertificateListResult.to_json())

# convert the object into a dict
certificate_list_result_dict = certificate_list_result_instance.to_dict()
# create an instance of CertificateListResult from a dict
certificate_list_result_from_dict = CertificateListResult.from_dict(certificate_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


