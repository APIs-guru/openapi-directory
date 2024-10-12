# AppServiceCertificateCollection

Collection of certificate order certificates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServiceCertificateResource]**](AppServiceCertificateResource.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_certificate_collection import AppServiceCertificateCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificateCollection from a JSON string
app_service_certificate_collection_instance = AppServiceCertificateCollection.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificateCollection.to_json())

# convert the object into a dict
app_service_certificate_collection_dict = app_service_certificate_collection_instance.to_dict()
# create an instance of AppServiceCertificateCollection from a dict
app_service_certificate_collection_from_dict = AppServiceCertificateCollection.from_dict(app_service_certificate_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


