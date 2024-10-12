# ConfigChange

Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advices** | [**List[Advice]**](Advice.md) | Collection of advice provided for this change, useful for determining the possible impact of this change. | [optional] 
**change_type** | **str** | The type for this change, either ADDED, REMOVED, or MODIFIED. | [optional] 
**element** | **str** | Object hierarchy path to the change, with levels separated by a &#39;.&#39; character. For repeated fields, an applicable unique identifier field is used for the index (usually selector, name, or id). For maps, the term &#39;key&#39; is used. If the field has no unique identifier, the numeric index is used. Examples: - visibility.rules[selector&#x3D;&#x3D;\&quot;google.LibraryService.ListBooks\&quot;].restriction - quota.metric_rules[selector&#x3D;&#x3D;\&quot;google\&quot;].metric_costs[key&#x3D;&#x3D;\&quot;reads\&quot;].value - logging.producer_destinations[0] | [optional] 
**new_value** | **str** | Value of the changed object in the new Service configuration, in JSON format. This field will not be populated if ChangeType &#x3D;&#x3D; REMOVED. | [optional] 
**old_value** | **str** | Value of the changed object in the old Service configuration, in JSON format. This field will not be populated if ChangeType &#x3D;&#x3D; ADDED. | [optional] 

## Example

```python
from openapi_client.models.config_change import ConfigChange

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigChange from a JSON string
config_change_instance = ConfigChange.from_json(json)
# print the JSON string representation of the object
print(ConfigChange.to_json())

# convert the object into a dict
config_change_dict = config_change_instance.to_dict()
# create an instance of ConfigChange from a dict
config_change_from_dict = ConfigChange.from_dict(config_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


