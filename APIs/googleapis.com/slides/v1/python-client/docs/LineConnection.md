# LineConnection

The properties for one end of a Line connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_object_id** | **str** | The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line. | [optional] 
**connection_site_index** | **int** | The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the \&quot;cnx\&quot; attribute in section 20.1.9.9 and Annex H. \&quot;Predefined DrawingML Shape and Text Geometries\&quot; of \&quot;Office Open XML File Formats-Fundamentals and Markup Language Reference\&quot;, part 1 of [ECMA-376 5th edition] (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also be viewed from Slides editor. | [optional] 

## Example

```python
from openapi_client.models.line_connection import LineConnection

# TODO update the JSON string below
json = "{}"
# create an instance of LineConnection from a JSON string
line_connection_instance = LineConnection.from_json(json)
# print the JSON string representation of the object
print(LineConnection.to_json())

# convert the object into a dict
line_connection_dict = line_connection_instance.to_dict()
# create an instance of LineConnection from a dict
line_connection_from_dict = LineConnection.from_dict(line_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


