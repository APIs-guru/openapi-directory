# QueryExperience

Class representing a Traffic Manager HeatMap query experience properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_id** | **int** | The id of the endpoint from the &#39;endpoints&#39; array which these queries were routed to. | 
**latency** | **float** | The latency experienced by queries originating from this location. | [optional] 
**query_count** | **int** | The number of queries originating from this location. | 

## Example

```python
from openapi_client.models.query_experience import QueryExperience

# TODO update the JSON string below
json = "{}"
# create an instance of QueryExperience from a JSON string
query_experience_instance = QueryExperience.from_json(json)
# print the JSON string representation of the object
print(QueryExperience.to_json())

# convert the object into a dict
query_experience_dict = query_experience_instance.to_dict()
# create an instance of QueryExperience from a dict
query_experience_from_dict = QueryExperience.from_dict(query_experience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


