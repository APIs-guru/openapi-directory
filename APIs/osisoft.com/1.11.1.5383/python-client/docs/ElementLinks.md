# ElementLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyses** | **str** |  | [optional] 
**attributes** | **str** |  | [optional] 
**categories** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**default_attribute** | **str** |  | [optional] 
**elements** | **str** |  | [optional] 
**end_value** | **str** |  | [optional] 
**event_frames** | **str** |  | [optional] 
**interpolated_data** | **str** |  | [optional] 
**notification_rules** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**plot_data** | **str** |  | [optional] 
**recorded_data** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**summary_data** | **str** |  | [optional] 
**template** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.element_links import ElementLinks

# TODO update the JSON string below
json = "{}"
# create an instance of ElementLinks from a JSON string
element_links_instance = ElementLinks.from_json(json)
# print the JSON string representation of the object
print(ElementLinks.to_json())

# convert the object into a dict
element_links_dict = element_links_instance.to_dict()
# create an instance of ElementLinks from a dict
element_links_from_dict = ElementLinks.from_dict(element_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


