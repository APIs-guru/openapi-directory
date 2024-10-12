# ServiceCredentialsCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceCredential]**](ServiceCredential.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_credentials_collection import ServiceCredentialsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCredentialsCollection from a JSON string
service_credentials_collection_instance = ServiceCredentialsCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceCredentialsCollection.to_json())

# convert the object into a dict
service_credentials_collection_dict = service_credentials_collection_instance.to_dict()
# create an instance of ServiceCredentialsCollection from a dict
service_credentials_collection_from_dict = ServiceCredentialsCollection.from_dict(service_credentials_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


