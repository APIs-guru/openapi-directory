# EndpointStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fail** | **int** |  | 
**pending** | **int** |  | 
**sending** | **int** |  | 
**success** | **int** |  | 

## Example

```python
from openapi_client.models.endpoint_stats import EndpointStats

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointStats from a JSON string
endpoint_stats_instance = EndpointStats.from_json(json)
# print the JSON string representation of the object
print(EndpointStats.to_json())

# convert the object into a dict
endpoint_stats_dict = endpoint_stats_instance.to_dict()
# create an instance of EndpointStats from a dict
endpoint_stats_from_dict = EndpointStats.from_dict(endpoint_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


