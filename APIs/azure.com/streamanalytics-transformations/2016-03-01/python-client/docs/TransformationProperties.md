# TransformationProperties

The properties that are associated with a transformation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. | [optional] [readonly] 
**query** | **str** | Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests. | [optional] 
**streaming_units** | **int** | Specifies the number of streaming units that the streaming job uses. | [optional] 

## Example

```python
from openapi_client.models.transformation_properties import TransformationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransformationProperties from a JSON string
transformation_properties_instance = TransformationProperties.from_json(json)
# print the JSON string representation of the object
print(TransformationProperties.to_json())

# convert the object into a dict
transformation_properties_dict = transformation_properties_instance.to_dict()
# create an instance of TransformationProperties from a dict
transformation_properties_from_dict = TransformationProperties.from_dict(transformation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


