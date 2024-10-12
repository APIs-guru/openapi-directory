# GeographicHierarchyProperties

Class representing the properties of the Geographic hierarchy used with the Geographic traffic routing method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geographic_hierarchy** | [**Region**](Region.md) |  | [optional] 

## Example

```python
from openapi_client.models.geographic_hierarchy_properties import GeographicHierarchyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GeographicHierarchyProperties from a JSON string
geographic_hierarchy_properties_instance = GeographicHierarchyProperties.from_json(json)
# print the JSON string representation of the object
print(GeographicHierarchyProperties.to_json())

# convert the object into a dict
geographic_hierarchy_properties_dict = geographic_hierarchy_properties_instance.to_dict()
# create an instance of GeographicHierarchyProperties from a dict
geographic_hierarchy_properties_from_dict = GeographicHierarchyProperties.from_dict(geographic_hierarchy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


