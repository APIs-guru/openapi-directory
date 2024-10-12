# RenameNetworkRequest

Message requesting rename of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_network_id** | **str** | Required. The new &#x60;id&#x60; of the network. | [optional] 

## Example

```python
from openapi_client.models.rename_network_request import RenameNetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenameNetworkRequest from a JSON string
rename_network_request_instance = RenameNetworkRequest.from_json(json)
# print the JSON string representation of the object
print(RenameNetworkRequest.to_json())

# convert the object into a dict
rename_network_request_dict = rename_network_request_instance.to_dict()
# create an instance of RenameNetworkRequest from a dict
rename_network_request_from_dict = RenameNetworkRequest.from_dict(rename_network_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


