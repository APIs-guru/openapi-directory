# Colors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar** | [**Dict[str, ColorDefinition]**](ColorDefinition.md) | A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its colorId field. Read-only. | [optional] 
**event** | [**Dict[str, ColorDefinition]**](ColorDefinition.md) | A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its colorId field. Read-only. | [optional] 
**kind** | **str** | Type of the resource (\&quot;calendar#colors\&quot;). | [optional] [default to 'calendar#colors']
**updated** | **datetime** | Last modification time of the color palette (as a RFC3339 timestamp). Read-only. | [optional] 

## Example

```python
from openapi_client.models.colors import Colors

# TODO update the JSON string below
json = "{}"
# create an instance of Colors from a JSON string
colors_instance = Colors.from_json(json)
# print the JSON string representation of the object
print(Colors.to_json())

# convert the object into a dict
colors_dict = colors_instance.to_dict()
# create an instance of Colors from a dict
colors_from_dict = Colors.from_dict(colors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


