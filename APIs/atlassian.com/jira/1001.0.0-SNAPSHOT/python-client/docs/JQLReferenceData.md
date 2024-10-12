# JQLReferenceData

Lists of JQL reference data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jql_reserved_words** | **List[str]** | List of JQL query reserved words. | [optional] 
**visible_field_names** | [**List[FieldReferenceData]**](FieldReferenceData.md) | List of fields usable in JQL queries. | [optional] 
**visible_function_names** | [**List[FunctionReferenceData]**](FunctionReferenceData.md) | List of functions usable in JQL queries. | [optional] 

## Example

```python
from openapi_client.models.jql_reference_data import JQLReferenceData

# TODO update the JSON string below
json = "{}"
# create an instance of JQLReferenceData from a JSON string
jql_reference_data_instance = JQLReferenceData.from_json(json)
# print the JSON string representation of the object
print(JQLReferenceData.to_json())

# convert the object into a dict
jql_reference_data_dict = jql_reference_data_instance.to_dict()
# create an instance of JQLReferenceData from a dict
jql_reference_data_from_dict = JQLReferenceData.from_dict(jql_reference_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


