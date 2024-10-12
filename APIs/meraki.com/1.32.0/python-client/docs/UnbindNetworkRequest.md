# UnbindNetworkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retain_configs** | **bool** | Optional boolean to retain all the current configs given by the template. | [optional] 

## Example

```python
from openapi_client.models.unbind_network_request import UnbindNetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnbindNetworkRequest from a JSON string
unbind_network_request_instance = UnbindNetworkRequest.from_json(json)
# print the JSON string representation of the object
print(UnbindNetworkRequest.to_json())

# convert the object into a dict
unbind_network_request_dict = unbind_network_request_instance.to_dict()
# create an instance of UnbindNetworkRequest from a dict
unbind_network_request_from_dict = UnbindNetworkRequest.from_dict(unbind_network_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


