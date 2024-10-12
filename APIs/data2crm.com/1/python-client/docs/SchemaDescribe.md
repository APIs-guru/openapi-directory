# SchemaDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create** | **object** |  | [optional] 
**fetch** | **object** |  | [optional] 
**fetch_all** | **object** |  | [optional] 
**update** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.schema_describe import SchemaDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaDescribe from a JSON string
schema_describe_instance = SchemaDescribe.from_json(json)
# print the JSON string representation of the object
print(SchemaDescribe.to_json())

# convert the object into a dict
schema_describe_dict = schema_describe_instance.to_dict()
# create an instance of SchemaDescribe from a dict
schema_describe_from_dict = SchemaDescribe.from_dict(schema_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


