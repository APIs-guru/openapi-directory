# DestinationId

A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn&#39;t exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence. | [optional] 
**name** | **str** | Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn&#39;t exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence. | [optional] 

## Example

```python
from openapi_client.models.destination_id import DestinationId

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationId from a JSON string
destination_id_instance = DestinationId.from_json(json)
# print the JSON string representation of the object
print(DestinationId.to_json())

# convert the object into a dict
destination_id_dict = destination_id_instance.to_dict()
# create an instance of DestinationId from a dict
destination_id_from_dict = DestinationId.from_dict(destination_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


