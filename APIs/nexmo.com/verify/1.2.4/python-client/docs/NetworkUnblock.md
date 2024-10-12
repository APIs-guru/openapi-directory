# NetworkUnblock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | The Network code | [optional] 
**unblock_duration** | **int** | An optional duration the unblock will be applied for in seconds | [optional] [default to 3600]

## Example

```python
from openapi_client.models.network_unblock import NetworkUnblock

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUnblock from a JSON string
network_unblock_instance = NetworkUnblock.from_json(json)
# print the JSON string representation of the object
print(NetworkUnblock.to_json())

# convert the object into a dict
network_unblock_dict = network_unblock_instance.to_dict()
# create an instance of NetworkUnblock from a dict
network_unblock_from_dict = NetworkUnblock.from_dict(network_unblock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


