# CollectionAnalyticData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** | Unique configuration identifier. Usually 36 alphanumeric characters | 
**entities** | [**List[Entity]**](Entity.md) | Returns the named entities and user defined entities from the text | 
**facets** | [**List[Facet]**](Facet.md) | Returns the facets extracted across all documents in the collection | 
**id** | **str** | Unique collection identifier. Can be up to 36 alphanumeric characters | 
**job_id** | **str** | Specific marker of a job collection belongs to, can be used for collections ordering on client side. | 
**status** | **str** | Status of the collection | 
**tag** | **str** | Any text of up to 50 characters used like marker | 
**taxonomy** | [**List[Topic]**](Topic.md) | Returns the taxonomy determined for the text | 
**themes** | [**List[Theme]**](Theme.md) | Returns themes across the documents | 
**topics** | [**List[Topic]**](Topic.md) | Returns the concept and query defined topics determined for the text | 

## Example

```python
from openapi_client.models.collection_analytic_data import CollectionAnalyticData

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionAnalyticData from a JSON string
collection_analytic_data_instance = CollectionAnalyticData.from_json(json)
# print the JSON string representation of the object
print(CollectionAnalyticData.to_json())

# convert the object into a dict
collection_analytic_data_dict = collection_analytic_data_instance.to_dict()
# create an instance of CollectionAnalyticData from a dict
collection_analytic_data_from_dict = CollectionAnalyticData.from_dict(collection_analytic_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


