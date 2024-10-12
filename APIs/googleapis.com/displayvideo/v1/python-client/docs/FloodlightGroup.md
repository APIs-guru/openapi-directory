# FloodlightGroup

A single Floodlight group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_view_config** | [**ActiveViewVideoViewabilityMetricConfig**](ActiveViewVideoViewabilityMetricConfig.md) |  | [optional] 
**custom_variables** | **Dict[str, object]** | User-defined custom variables owned by the Floodlight group. Use custom Floodlight variables to create reporting data that is tailored to your unique business needs. Custom Floodlight variables use the keys &#x60;U1&#x3D;&#x60;, &#x60;U2&#x3D;&#x60;, and so on, and can take any values that you choose to pass to them. You can use them to track virtually any type of data that you collect about your customers, such as the genre of movie that a customer purchases, the country to which the item is shipped, and so on. Custom Floodlight variables may not be used to pass any data that could be used or recognized as personally identifiable information (PII). Example: &#x60;custom_variables { fields { \&quot;U1\&quot;: value { number_value: 123.4 }, \&quot;U2\&quot;: value { string_value: \&quot;MyVariable2\&quot; }, \&quot;U3\&quot;: value { string_value: \&quot;MyVariable3\&quot; } } }&#x60; Acceptable values for keys are \&quot;U1\&quot; through \&quot;U100\&quot;, inclusive. String values must be less than 64 characters long, and cannot contain the following characters: &#x60;\&quot;&lt;&gt;&#x60;. | [optional] 
**display_name** | **str** | Required. The display name of the Floodlight group. | [optional] 
**floodlight_group_id** | **str** | Output only. The unique ID of the Floodlight group. Assigned by the system. | [optional] [readonly] 
**lookback_window** | [**LookbackWindow**](LookbackWindow.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the Floodlight group. | [optional] [readonly] 
**web_tag_type** | **str** | Required. The web tag type enabled for the Floodlight group. | [optional] 

## Example

```python
from openapi_client.models.floodlight_group import FloodlightGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightGroup from a JSON string
floodlight_group_instance = FloodlightGroup.from_json(json)
# print the JSON string representation of the object
print(FloodlightGroup.to_json())

# convert the object into a dict
floodlight_group_dict = floodlight_group_instance.to_dict()
# create an instance of FloodlightGroup from a dict
floodlight_group_from_dict = FloodlightGroup.from_dict(floodlight_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


