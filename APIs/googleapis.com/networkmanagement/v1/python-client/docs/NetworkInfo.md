# NetworkInfo

For display only. Metadata associated with a Compute Engine network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Compute Engine network. | [optional] 
**matched_ip_range** | **str** | The IP range that matches the test. | [optional] 
**uri** | **str** | URI of a Compute Engine network. | [optional] 

## Example

```python
from openapi_client.models.network_info import NetworkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInfo from a JSON string
network_info_instance = NetworkInfo.from_json(json)
# print the JSON string representation of the object
print(NetworkInfo.to_json())

# convert the object into a dict
network_info_dict = network_info_instance.to_dict()
# create an instance of NetworkInfo from a dict
network_info_from_dict = NetworkInfo.from_dict(network_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


