# NetworkTags

Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **List[str]** | List of network tags. | [optional] 

## Example

```python
from openapi_client.models.network_tags import NetworkTags

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkTags from a JSON string
network_tags_instance = NetworkTags.from_json(json)
# print the JSON string representation of the object
print(NetworkTags.to_json())

# convert the object into a dict
network_tags_dict = network_tags_instance.to_dict()
# create an instance of NetworkTags from a dict
network_tags_from_dict = NetworkTags.from_dict(network_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


