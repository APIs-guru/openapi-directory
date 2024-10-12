# ComponentPurgeBodyFilters

User-defined filters to return data which will be purged from the table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | The column of the table over which the given query should run | [optional] 
**key** | **str** | When filtering over custom dimensions, this key will be used as the name of the custom dimension. | [optional] 
**operator** | **str** | A query operator to evaluate over the provided column and value(s). Supported operators are &#x3D;&#x3D;, &#x3D;~, in, in~, &gt;, &gt;&#x3D;, &lt;, &lt;&#x3D;, between, and have the same behavior as they would in a KQL query. | [optional] 
**value** | **object** | the value for the operator to function over. This can be a number (e.g., &gt; 100), a string (timestamp &gt;&#x3D; &#39;2017-09-01&#39;) or array of values. | [optional] 

## Example

```python
from openapi_client.models.component_purge_body_filters import ComponentPurgeBodyFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentPurgeBodyFilters from a JSON string
component_purge_body_filters_instance = ComponentPurgeBodyFilters.from_json(json)
# print the JSON string representation of the object
print(ComponentPurgeBodyFilters.to_json())

# convert the object into a dict
component_purge_body_filters_dict = component_purge_body_filters_instance.to_dict()
# create an instance of ComponentPurgeBodyFilters from a dict
component_purge_body_filters_from_dict = ComponentPurgeBodyFilters.from_dict(component_purge_body_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


