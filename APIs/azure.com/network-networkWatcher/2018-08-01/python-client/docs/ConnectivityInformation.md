# ConnectivityInformation

Information on the connectivity status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_latency_in_ms** | **int** | Average latency in milliseconds. | [optional] [readonly] 
**connection_status** | **str** | The connection status. | [optional] [readonly] 
**hops** | [**List[ConnectivityHop]**](ConnectivityHop.md) | List of hops between the source and the destination. | [optional] [readonly] 
**max_latency_in_ms** | **int** | Maximum latency in milliseconds. | [optional] [readonly] 
**min_latency_in_ms** | **int** | Minimum latency in milliseconds. | [optional] [readonly] 
**probes_failed** | **int** | Number of failed probes. | [optional] [readonly] 
**probes_sent** | **int** | Total number of probes sent. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connectivity_information import ConnectivityInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityInformation from a JSON string
connectivity_information_instance = ConnectivityInformation.from_json(json)
# print the JSON string representation of the object
print(ConnectivityInformation.to_json())

# convert the object into a dict
connectivity_information_dict = connectivity_information_instance.to_dict()
# create an instance of ConnectivityInformation from a dict
connectivity_information_from_dict = ConnectivityInformation.from_dict(connectivity_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


