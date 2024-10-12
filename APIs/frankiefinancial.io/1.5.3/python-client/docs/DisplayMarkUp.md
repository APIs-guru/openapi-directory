# DisplayMarkUp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | Comma seperated list of attributes to apply to value when rendering. | [optional] 
**children** | [**List[DisplayMarkUp]**](DisplayMarkUp.md) | Children of element. This data structure is recursive with a DisplayMarkup  element having 0 or more DisplayMarkup children | [optional] 
**confirmation** | **str** | Does this statement need to be confirmed (with a checkbox)? Confirmation can be mandatory or optional. When the confirmation element is present a key element must also be present. The keys of all confirmed statements must be sent in the switch request. The absence of any mandatory confirmation will result in an error response from the switch request. | [optional] 
**key** | **str** | For elements that require confirmation, the key of each element that the user has accepted must be send in the switch request. The absence of any mandatory confirmation will result in an error response from the switch request. | [optional] 
**name** | **str** | Text to display as header/title of value. | [optional] 
**parameters** | [**Dict[str, DisplayMarkUpParametersValue]**](DisplayMarkUpParametersValue.md) | Optional element which has a keyvalue pair associated with every data binding contained in the value element of the current object. | [optional] 
**type** | **str** | Type of component to be used for rendering | [optional] 
**value** | **str** | Data to be rendered. This data can contain data bindings (contained in {{ }}). If present in the string the parameters object will contain a key with the same name and the associated data (e.g a link).&lt;br&gt;&lt;br&gt;&lt;div style&#x3D;\&quot;background-color:black;color:white;\&quot;&gt;{&lt;br&gt;&amp;nbsp;&amp;nbsp;\&quot;type\&quot;:&amp;nbsp;\&quot;text\&quot;,&lt;br&gt;&amp;nbsp;&amp;nbsp;\&quot;value\&quot;:&amp;nbsp;\&quot;I&amp;nbsp;accept&amp;nbsp;the&amp;nbsp;{{Terms&amp;nbsp;and&amp;nbsp;Conditions}}.\&quot;,&lt;br&gt;&amp;nbsp;&amp;nbsp;\&quot;parameters\&quot;:&amp;nbsp;{&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Terms&amp;nbsp;and&amp;nbsp;Conditions\&quot;:&amp;nbsp;{&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;type\&quot;:&amp;nbsp;\&quot;link\&quot;,&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;value\&quot;:&amp;nbsp;\&quot;https://www.accurassi.com.au/sample-terms-and-conditions/\&quot;&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;}&lt;br&gt;&amp;nbsp;&amp;nbsp;}&lt;br&gt;}&lt;/div&gt; | [optional] 

## Example

```python
from openapi_client.models.display_mark_up import DisplayMarkUp

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayMarkUp from a JSON string
display_mark_up_instance = DisplayMarkUp.from_json(json)
# print the JSON string representation of the object
print(DisplayMarkUp.to_json())

# convert the object into a dict
display_mark_up_dict = display_mark_up_instance.to_dict()
# create an instance of DisplayMarkUp from a dict
display_mark_up_from_dict = DisplayMarkUp.from_dict(display_mark_up_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


