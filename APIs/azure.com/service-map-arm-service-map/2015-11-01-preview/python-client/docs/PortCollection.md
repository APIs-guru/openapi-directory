# PortCollection

Collection of Port resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[Port]**](Port.md) | Collection of Port resources. | [optional] 

## Example

```python
from openapi_client.models.port_collection import PortCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PortCollection from a JSON string
port_collection_instance = PortCollection.from_json(json)
# print the JSON string representation of the object
print(PortCollection.to_json())

# convert the object into a dict
port_collection_dict = port_collection_instance.to_dict()
# create an instance of PortCollection from a dict
port_collection_from_dict = PortCollection.from_dict(port_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


