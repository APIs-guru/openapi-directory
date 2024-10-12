# ObjectDisplayOptions

The display options for an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metalines** | [**List[Metaline]**](Metaline.md) | Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3. | [optional] 
**object_display_label** | **str** | The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn&#39;t displayed on the context line of the search results. The maximum length is 64 characters. | [optional] 

## Example

```python
from openapi_client.models.object_display_options import ObjectDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectDisplayOptions from a JSON string
object_display_options_instance = ObjectDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(ObjectDisplayOptions.to_json())

# convert the object into a dict
object_display_options_dict = object_display_options_instance.to_dict()
# create an instance of ObjectDisplayOptions from a dict
object_display_options_from_dict = ObjectDisplayOptions.from_dict(object_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


