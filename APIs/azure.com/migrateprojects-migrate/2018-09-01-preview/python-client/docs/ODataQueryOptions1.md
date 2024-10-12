# ODataQueryOptions1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**FilterQueryOption**](FilterQueryOption.md) |  | [optional] 

## Example

```python
from openapi_client.models.o_data_query_options1 import ODataQueryOptions1

# TODO update the JSON string below
json = "{}"
# create an instance of ODataQueryOptions1 from a JSON string
o_data_query_options1_instance = ODataQueryOptions1.from_json(json)
# print the JSON string representation of the object
print(ODataQueryOptions1.to_json())

# convert the object into a dict
o_data_query_options1_dict = o_data_query_options1_instance.to_dict()
# create an instance of ODataQueryOptions1 from a dict
o_data_query_options1_from_dict = ODataQueryOptions1.from_dict(o_data_query_options1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


