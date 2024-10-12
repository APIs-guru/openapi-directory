# CompositeType

Holds the composite type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | An optional textual description of the resource; provided by the client when the resource is created. | [optional] 
**id** | **str** |  | [optional] 
**insert_time** | **str** | Output only. Creation timestamp in RFC3339 text format. | [optional] 
**labels** | [**List[CompositeTypeLabelEntry]**](CompositeTypeLabelEntry.md) | Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60; Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. | [optional] 
**name** | **str** | Name of the composite type, must follow the expression: &#x60;[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?&#x60;. | [optional] 
**operation** | [**Operation**](Operation.md) |  | [optional] 
**self_link** | **str** | Output only. Server defined URL for the resource. | [optional] 
**status** | **str** |  | [optional] 
**template_contents** | [**TemplateContents**](TemplateContents.md) |  | [optional] 

## Example

```python
from openapi_client.models.composite_type import CompositeType

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeType from a JSON string
composite_type_instance = CompositeType.from_json(json)
# print the JSON string representation of the object
print(CompositeType.to_json())

# convert the object into a dict
composite_type_dict = composite_type_instance.to_dict()
# create an instance of CompositeType from a dict
composite_type_from_dict = CompositeType.from_dict(composite_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


