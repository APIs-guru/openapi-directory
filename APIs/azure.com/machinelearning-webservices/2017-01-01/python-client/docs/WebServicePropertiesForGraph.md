# WebServicePropertiesForGraph

Properties specific to a Graph based web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package** | [**GraphPackage**](GraphPackage.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_service_properties_for_graph import WebServicePropertiesForGraph

# TODO update the JSON string below
json = "{}"
# create an instance of WebServicePropertiesForGraph from a JSON string
web_service_properties_for_graph_instance = WebServicePropertiesForGraph.from_json(json)
# print the JSON string representation of the object
print(WebServicePropertiesForGraph.to_json())

# convert the object into a dict
web_service_properties_for_graph_dict = web_service_properties_for_graph_instance.to_dict()
# create an instance of WebServicePropertiesForGraph from a dict
web_service_properties_for_graph_from_dict = WebServicePropertiesForGraph.from_dict(web_service_properties_for_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


