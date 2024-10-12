# Type

A resource type supported by Deployment Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | [**BaseType**](BaseType.md) |  | [optional] 
**description** | **str** | An optional textual description of the resource; provided by the client when the resource is created. | [optional] 
**id** | **str** |  | [optional] 
**insert_time** | **str** | Output only. Creation timestamp in RFC3339 text format. | [optional] 
**labels** | [**List[TypeLabelEntry]**](TypeLabelEntry.md) | Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60; Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. | [optional] 
**name** | **str** | Name of the type. | [optional] 
**operation** | [**Operation**](Operation.md) |  | [optional] 
**self_link** | **str** | Output only. Server defined URL for the resource. | [optional] 

## Example

```python
from openapi_client.models.type import Type

# TODO update the JSON string below
json = "{}"
# create an instance of Type from a JSON string
type_instance = Type.from_json(json)
# print the JSON string representation of the object
print(Type.to_json())

# convert the object into a dict
type_dict = type_instance.to_dict()
# create an instance of Type from a dict
type_from_dict = Type.from_dict(type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


