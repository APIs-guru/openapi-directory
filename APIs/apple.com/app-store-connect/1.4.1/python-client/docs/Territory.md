# Territory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**TerritoryAttributes**](TerritoryAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.territory import Territory

# TODO update the JSON string below
json = "{}"
# create an instance of Territory from a JSON string
territory_instance = Territory.from_json(json)
# print the JSON string representation of the object
print(Territory.to_json())

# convert the object into a dict
territory_dict = territory_instance.to_dict()
# create an instance of Territory from a dict
territory_from_dict = Territory.from_dict(territory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


