# NetworkFollow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**NetworkFollowEmbedded**](NetworkFollowEmbedded.md) |  | [optional] 
**network_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.network_follow import NetworkFollow

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkFollow from a JSON string
network_follow_instance = NetworkFollow.from_json(json)
# print the JSON string representation of the object
print(NetworkFollow.to_json())

# convert the object into a dict
network_follow_dict = network_follow_instance.to_dict()
# create an instance of NetworkFollow from a dict
network_follow_from_dict = NetworkFollow.from_dict(network_follow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


