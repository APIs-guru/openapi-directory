# Type

`Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_element_type** | [**Type**](Type.md) |  | [optional] 
**code** | **str** | Required. The TypeCode for this type. | [optional] 
**proto_type_fqn** | **str** | If code &#x3D;&#x3D; PROTO or code &#x3D;&#x3D; ENUM, then &#x60;proto_type_fqn&#x60; is the fully qualified name of the proto type representing the proto/enum definition. | [optional] 
**struct_type** | [**StructType**](StructType.md) |  | [optional] 
**type_annotation** | **str** | The TypeAnnotationCode that disambiguates SQL type that Spanner will use to represent values of this type during query processing. This is necessary for some type codes because a single TypeCode can be mapped to different SQL types depending on the SQL dialect. type_annotation typically is not needed to process the content of a value (it doesn&#39;t affect serialization) and clients can ignore it on the read path. | [optional] 

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


