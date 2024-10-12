# ValueTransformation

Description of data transformation during migration as part of the ConditionalColumnSetValue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_hash** | [**ApplyHash**](ApplyHash.md) |  | [optional] 
**assign_max_value** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**assign_min_value** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**assign_null** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**assign_specific_value** | [**AssignSpecificValue**](AssignSpecificValue.md) |  | [optional] 
**double_comparison** | [**DoubleComparisonFilter**](DoubleComparisonFilter.md) |  | [optional] 
**int_comparison** | [**IntComparisonFilter**](IntComparisonFilter.md) |  | [optional] 
**is_null** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**round_scale** | [**RoundToScale**](RoundToScale.md) |  | [optional] 
**value_list** | [**ValueListFilter**](ValueListFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.value_transformation import ValueTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of ValueTransformation from a JSON string
value_transformation_instance = ValueTransformation.from_json(json)
# print the JSON string representation of the object
print(ValueTransformation.to_json())

# convert the object into a dict
value_transformation_dict = value_transformation_instance.to_dict()
# create an instance of ValueTransformation from a dict
value_transformation_from_dict = ValueTransformation.from_dict(value_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


