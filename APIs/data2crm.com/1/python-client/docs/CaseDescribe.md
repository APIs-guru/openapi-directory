# CaseDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.case_describe import CaseDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of CaseDescribe from a JSON string
case_describe_instance = CaseDescribe.from_json(json)
# print the JSON string representation of the object
print(CaseDescribe.to_json())

# convert the object into a dict
case_describe_dict = case_describe_instance.to_dict()
# create an instance of CaseDescribe from a dict
case_describe_from_dict = CaseDescribe.from_dict(case_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


