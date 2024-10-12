# InQueryParam

JWT location in a query param

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the query param | 
**type** | **str** | String with value InQueryParam | 

## Example

```python
from openapi_client.models.in_query_param import InQueryParam

# TODO update the JSON string below
json = "{}"
# create an instance of InQueryParam from a JSON string
in_query_param_instance = InQueryParam.from_json(json)
# print the JSON string representation of the object
print(InQueryParam.to_json())

# convert the object into a dict
in_query_param_dict = in_query_param_instance.to_dict()
# create an instance of InQueryParam from a dict
in_query_param_from_dict = InQueryParam.from_dict(in_query_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


