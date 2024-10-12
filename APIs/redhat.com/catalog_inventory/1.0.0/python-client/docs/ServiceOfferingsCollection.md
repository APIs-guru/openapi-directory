# ServiceOfferingsCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceOffering]**](ServiceOffering.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_offerings_collection import ServiceOfferingsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceOfferingsCollection from a JSON string
service_offerings_collection_instance = ServiceOfferingsCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceOfferingsCollection.to_json())

# convert the object into a dict
service_offerings_collection_dict = service_offerings_collection_instance.to_dict()
# create an instance of ServiceOfferingsCollection from a dict
service_offerings_collection_from_dict = ServiceOfferingsCollection.from_dict(service_offerings_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


