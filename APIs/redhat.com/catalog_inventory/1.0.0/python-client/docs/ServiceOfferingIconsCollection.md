# ServiceOfferingIconsCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceOfferingIcon]**](ServiceOfferingIcon.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_offering_icons_collection import ServiceOfferingIconsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceOfferingIconsCollection from a JSON string
service_offering_icons_collection_instance = ServiceOfferingIconsCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceOfferingIconsCollection.to_json())

# convert the object into a dict
service_offering_icons_collection_dict = service_offering_icons_collection_instance.to_dict()
# create an instance of ServiceOfferingIconsCollection from a dict
service_offering_icons_collection_from_dict = ServiceOfferingIconsCollection.from_dict(service_offering_icons_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


