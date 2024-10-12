# ServiceCredentialTypesCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceCredentialType]**](ServiceCredentialType.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_credential_types_collection import ServiceCredentialTypesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCredentialTypesCollection from a JSON string
service_credential_types_collection_instance = ServiceCredentialTypesCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceCredentialTypesCollection.to_json())

# convert the object into a dict
service_credential_types_collection_dict = service_credential_types_collection_instance.to_dict()
# create an instance of ServiceCredentialTypesCollection from a dict
service_credential_types_collection_from_dict = ServiceCredentialTypesCollection.from_dict(service_credential_types_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


