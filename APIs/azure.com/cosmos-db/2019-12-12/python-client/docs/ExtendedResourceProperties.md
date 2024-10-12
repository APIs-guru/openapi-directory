# ExtendedResourceProperties

The system generated resource properties associated with SQL databases, SQL containers, Gremlin databases and Gremlin graphs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.extended_resource_properties import ExtendedResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedResourceProperties from a JSON string
extended_resource_properties_instance = ExtendedResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ExtendedResourceProperties.to_json())

# convert the object into a dict
extended_resource_properties_dict = extended_resource_properties_instance.to_dict()
# create an instance of ExtendedResourceProperties from a dict
extended_resource_properties_from_dict = ExtendedResourceProperties.from_dict(extended_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


