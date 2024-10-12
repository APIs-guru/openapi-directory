# InputDataQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** | XML or JSON string | 
**query** | **str** | XPath or JSONPath query | 

## Example

```python
from openapi_client.models.input_data_query import InputDataQuery

# TODO update the JSON string below
json = "{}"
# create an instance of InputDataQuery from a JSON string
input_data_query_instance = InputDataQuery.from_json(json)
# print the JSON string representation of the object
print(InputDataQuery.to_json())

# convert the object into a dict
input_data_query_dict = input_data_query_instance.to_dict()
# create an instance of InputDataQuery from a dict
input_data_query_from_dict = InputDataQuery.from_dict(input_data_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


