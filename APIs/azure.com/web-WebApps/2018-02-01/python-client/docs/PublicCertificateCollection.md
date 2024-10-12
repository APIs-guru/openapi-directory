# PublicCertificateCollection

Collection of public certificates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[PublicCertificate]**](PublicCertificate.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.public_certificate_collection import PublicCertificateCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PublicCertificateCollection from a JSON string
public_certificate_collection_instance = PublicCertificateCollection.from_json(json)
# print the JSON string representation of the object
print(PublicCertificateCollection.to_json())

# convert the object into a dict
public_certificate_collection_dict = public_certificate_collection_instance.to_dict()
# create an instance of PublicCertificateCollection from a dict
public_certificate_collection_from_dict = PublicCertificateCollection.from_dict(public_certificate_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


