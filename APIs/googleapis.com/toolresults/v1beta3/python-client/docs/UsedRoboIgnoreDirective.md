# UsedRoboIgnoreDirective

Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | The name of the resource that was ignored. | [optional] 

## Example

```python
from openapi_client.models.used_robo_ignore_directive import UsedRoboIgnoreDirective

# TODO update the JSON string below
json = "{}"
# create an instance of UsedRoboIgnoreDirective from a JSON string
used_robo_ignore_directive_instance = UsedRoboIgnoreDirective.from_json(json)
# print the JSON string representation of the object
print(UsedRoboIgnoreDirective.to_json())

# convert the object into a dict
used_robo_ignore_directive_dict = used_robo_ignore_directive_instance.to_dict()
# create an instance of UsedRoboIgnoreDirective from a dict
used_robo_ignore_directive_from_dict = UsedRoboIgnoreDirective.from_dict(used_robo_ignore_directive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


