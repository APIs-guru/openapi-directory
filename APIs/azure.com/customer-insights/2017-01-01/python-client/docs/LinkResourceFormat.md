# LinkResourceFormat

The link resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LinkDefinition**](LinkDefinition.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.link_resource_format import LinkResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of LinkResourceFormat from a JSON string
link_resource_format_instance = LinkResourceFormat.from_json(json)
# print the JSON string representation of the object
print(LinkResourceFormat.to_json())

# convert the object into a dict
link_resource_format_dict = link_resource_format_instance.to_dict()
# create an instance of LinkResourceFormat from a dict
link_resource_format_from_dict = LinkResourceFormat.from_dict(link_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


