# LinkProperties

Contains a sourceId and workbook resource id to link two resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of workbook | [optional] 
**source_id** | **str** | The source Azure resource id | [optional] 
**target_id** | **str** | The workbook Azure resource id | [optional] 

## Example

```python
from openapi_client.models.link_properties import LinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LinkProperties from a JSON string
link_properties_instance = LinkProperties.from_json(json)
# print the JSON string representation of the object
print(LinkProperties.to_json())

# convert the object into a dict
link_properties_dict = link_properties_instance.to_dict()
# create an instance of LinkProperties from a dict
link_properties_from_dict = LinkProperties.from_dict(link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


