# ServicePlansCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServicePlan]**](ServicePlan.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_plans_collection import ServicePlansCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlansCollection from a JSON string
service_plans_collection_instance = ServicePlansCollection.from_json(json)
# print the JSON string representation of the object
print(ServicePlansCollection.to_json())

# convert the object into a dict
service_plans_collection_dict = service_plans_collection_instance.to_dict()
# create an instance of ServicePlansCollection from a dict
service_plans_collection_from_dict = ServicePlansCollection.from_dict(service_plans_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


