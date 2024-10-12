# Clustering

Configures table clustering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** | One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. The ordering of the clustering fields should be prioritized from most to least important for filtering purposes. Additional information on limitations can be found here: https://cloud.google.com/bigquery/docs/creating-clustered-tables#limitations | [optional] 

## Example

```python
from openapi_client.models.clustering import Clustering

# TODO update the JSON string below
json = "{}"
# create an instance of Clustering from a JSON string
clustering_instance = Clustering.from_json(json)
# print the JSON string representation of the object
print(Clustering.to_json())

# convert the object into a dict
clustering_dict = clustering_instance.to_dict()
# create an instance of Clustering from a dict
clustering_from_dict = Clustering.from_dict(clustering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


