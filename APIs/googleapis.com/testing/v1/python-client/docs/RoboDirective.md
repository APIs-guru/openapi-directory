# RoboDirective

Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | Required. The type of action that Robo should perform on the specified element. | [optional] 
**input_text** | **str** | The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name. | [optional] 
**resource_name** | **str** | Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the \&quot;foo\&quot; part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html | [optional] 

## Example

```python
from openapi_client.models.robo_directive import RoboDirective

# TODO update the JSON string below
json = "{}"
# create an instance of RoboDirective from a JSON string
robo_directive_instance = RoboDirective.from_json(json)
# print the JSON string representation of the object
print(RoboDirective.to_json())

# convert the object into a dict
robo_directive_dict = robo_directive_instance.to_dict()
# create an instance of RoboDirective from a dict
robo_directive_from_dict = RoboDirective.from_dict(robo_directive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


