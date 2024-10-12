# BindNetworkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_bind** | **bool** | Optional boolean indicating whether the network&#39;s switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model. | [optional] 
**config_template_id** | **str** | The ID of the template to which the network should be bound. | 

## Example

```python
from openapi_client.models.bind_network_request import BindNetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BindNetworkRequest from a JSON string
bind_network_request_instance = BindNetworkRequest.from_json(json)
# print the JSON string representation of the object
print(BindNetworkRequest.to_json())

# convert the object into a dict
bind_network_request_dict = bind_network_request_instance.to_dict()
# create an instance of BindNetworkRequest from a dict
bind_network_request_from_dict = BindNetworkRequest.from_dict(bind_network_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


