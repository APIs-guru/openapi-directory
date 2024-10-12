# Dimension

This type defines the annotation and dimension key used by the report. For information on how to set these values, see <a href=\"/api-docs/sell/static/marketing/pl-reports.html\">Promoted Listings reporting</a>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_keys** | **List[str]** | A list of annotations associated with the dimension of the report. | [optional] 
**dimension_key** | **str** | The name of the dimension on which the report is based. &lt;p&gt;A dimension is an attribute to which the report data applies.&lt;/p&gt; | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


