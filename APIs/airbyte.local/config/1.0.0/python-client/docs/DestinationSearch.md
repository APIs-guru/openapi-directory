# DestinationSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | [optional] 
**destination_definition_id** | **str** |  | [optional] 
**destination_id** | **str** |  | [optional] 
**destination_name** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**workspace_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.destination_search import DestinationSearch

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationSearch from a JSON string
destination_search_instance = DestinationSearch.from_json(json)
# print the JSON string representation of the object
print(DestinationSearch.to_json())

# convert the object into a dict
destination_search_dict = destination_search_instance.to_dict()
# create an instance of DestinationSearch from a dict
destination_search_from_dict = DestinationSearch.from_dict(destination_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


