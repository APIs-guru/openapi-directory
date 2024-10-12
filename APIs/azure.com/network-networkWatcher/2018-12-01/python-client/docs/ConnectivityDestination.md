# ConnectivityDestination

Parameters that define destination of connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address or URI the resource to which a connection attempt will be made. | [optional] 
**port** | **int** | Port on which check connectivity will be performed. | [optional] 
**resource_id** | **str** | The ID of the resource to which a connection attempt will be made. | [optional] 

## Example

```python
from openapi_client.models.connectivity_destination import ConnectivityDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityDestination from a JSON string
connectivity_destination_instance = ConnectivityDestination.from_json(json)
# print the JSON string representation of the object
print(ConnectivityDestination.to_json())

# convert the object into a dict
connectivity_destination_dict = connectivity_destination_instance.to_dict()
# create an instance of ConnectivityDestination from a dict
connectivity_destination_from_dict = ConnectivityDestination.from_dict(connectivity_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


