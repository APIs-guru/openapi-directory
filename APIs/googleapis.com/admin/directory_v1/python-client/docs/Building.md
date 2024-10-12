# Building

Public API: Resources.buildings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**BuildingAddress**](BuildingAddress.md) |  | [optional] 
**building_id** | **str** | Unique identifier for the building. The maximum length is 100 characters. | [optional] 
**building_name** | **str** | The building name as seen by users in Calendar. Must be unique for the customer. For example, \&quot;NYC-CHEL\&quot;. The maximum length is 100 characters. | [optional] 
**coordinates** | [**BuildingCoordinates**](BuildingCoordinates.md) |  | [optional] 
**description** | **str** | A brief description of the building. For example, \&quot;Chelsea Market\&quot;. | [optional] 
**etags** | **str** | ETag of the resource. | [optional] 
**floor_names** | **List[str]** | The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, [\&quot;B2\&quot;, \&quot;B1\&quot;, \&quot;L\&quot;, \&quot;1\&quot;, \&quot;2\&quot;, \&quot;2M\&quot;, \&quot;3\&quot;, \&quot;PH\&quot;] Must contain at least one entry. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#resources#buildings#Building']

## Example

```python
from openapi_client.models.building import Building

# TODO update the JSON string below
json = "{}"
# create an instance of Building from a JSON string
building_instance = Building.from_json(json)
# print the JSON string representation of the object
print(Building.to_json())

# convert the object into a dict
building_dict = building_instance.to_dict()
# create an instance of Building from a dict
building_from_dict = Building.from_dict(building_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


