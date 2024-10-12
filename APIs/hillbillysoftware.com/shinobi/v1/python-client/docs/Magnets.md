# Magnets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externals** | [**List[ExternalIDs]**](ExternalIDs.md) |  | [optional] 
**first_seen_date** | **str** | Date this hash was first detected | [optional] 
**hash** | **str** | The actual hash you need to construct your magnet | [optional] 
**image** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**peers** | **str** | Number of Peers available at FirstSeenDate | [optional] 
**seeds** | **str** | Number of Seeds available at FirstSeenDate | [optional] 
**size** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.magnets import Magnets

# TODO update the JSON string below
json = "{}"
# create an instance of Magnets from a JSON string
magnets_instance = Magnets.from_json(json)
# print the JSON string representation of the object
print(Magnets.to_json())

# convert the object into a dict
magnets_dict = magnets_instance.to_dict()
# create an instance of Magnets from a dict
magnets_from_dict = Magnets.from_dict(magnets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


