# UsedRoboDirective

Additional details of a used Robo directive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | The name of the resource that was used. | [optional] 

## Example

```python
from openapi_client.models.used_robo_directive import UsedRoboDirective

# TODO update the JSON string below
json = "{}"
# create an instance of UsedRoboDirective from a JSON string
used_robo_directive_instance = UsedRoboDirective.from_json(json)
# print the JSON string representation of the object
print(UsedRoboDirective.to_json())

# convert the object into a dict
used_robo_directive_dict = used_robo_directive_instance.to_dict()
# create an instance of UsedRoboDirective from a dict
used_robo_directive_from_dict = UsedRoboDirective.from_dict(used_robo_directive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


