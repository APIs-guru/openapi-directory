# Destination

Destination properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta_data** | [**DestinationMetaData**](DestinationMetaData.md) |  | [optional] 
**resource_id** | **str** | The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure. | 
**type** | **str** | The type of the destination resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.destination import Destination

# TODO update the JSON string below
json = "{}"
# create an instance of Destination from a JSON string
destination_instance = Destination.from_json(json)
# print the JSON string representation of the object
print(Destination.to_json())

# convert the object into a dict
destination_dict = destination_instance.to_dict()
# create an instance of Destination from a dict
destination_from_dict = Destination.from_dict(destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


