# GaDataQuery

Analytics data request query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **str** | List of analytics dimensions. | [optional] 
**end_date** | **str** | End date. | [optional] 
**filters** | **str** | Comma-separated list of dimension or metric filters. | [optional] 
**ids** | **str** | Unique table ID. | [optional] 
**max_results** | **int** | Maximum results per page. | [optional] 
**metrics** | **List[str]** | List of analytics metrics. | [optional] 
**sampling_level** | **str** | Desired sampling level | [optional] 
**segment** | **str** | Analytics advanced segment. | [optional] 
**sort** | **List[str]** | List of dimensions or metrics based on which Analytics data is sorted. | [optional] 
**start_date** | **str** | Start date. | [optional] 
**start_index** | **int** | Start index. | [optional] 

## Example

```python
from openapi_client.models.ga_data_query import GaDataQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GaDataQuery from a JSON string
ga_data_query_instance = GaDataQuery.from_json(json)
# print the JSON string representation of the object
print(GaDataQuery.to_json())

# convert the object into a dict
ga_data_query_dict = ga_data_query_instance.to_dict()
# create an instance of GaDataQuery from a dict
ga_data_query_from_dict = GaDataQuery.from_dict(ga_data_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


