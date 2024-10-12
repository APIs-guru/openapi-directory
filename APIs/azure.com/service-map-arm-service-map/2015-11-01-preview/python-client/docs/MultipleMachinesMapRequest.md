# MultipleMachinesMapRequest

Provides a base class for describing map requests for a collection of machines

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_processes** | **bool** | If true, only processes between specified machines will be included. Any connections in or out of those processes will be included. | [optional] 

## Example

```python
from openapi_client.models.multiple_machines_map_request import MultipleMachinesMapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleMachinesMapRequest from a JSON string
multiple_machines_map_request_instance = MultipleMachinesMapRequest.from_json(json)
# print the JSON string representation of the object
print(MultipleMachinesMapRequest.to_json())

# convert the object into a dict
multiple_machines_map_request_dict = multiple_machines_map_request_instance.to_dict()
# create an instance of MultipleMachinesMapRequest from a dict
multiple_machines_map_request_from_dict = MultipleMachinesMapRequest.from_dict(multiple_machines_map_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


