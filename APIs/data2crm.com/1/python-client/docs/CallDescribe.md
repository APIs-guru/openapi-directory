# CallDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.call_describe import CallDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of CallDescribe from a JSON string
call_describe_instance = CallDescribe.from_json(json)
# print the JSON string representation of the object
print(CallDescribe.to_json())

# convert the object into a dict
call_describe_dict = call_describe_instance.to_dict()
# create an instance of CallDescribe from a dict
call_describe_from_dict = CallDescribe.from_dict(call_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


