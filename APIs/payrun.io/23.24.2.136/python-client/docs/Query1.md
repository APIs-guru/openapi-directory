# Query1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | The querys&#39; encoding | [optional] 
**exclude_null_or_empty_elements** | **bool** | The querys&#39; exclude null or empty elements | [optional] 
**groups** | [**Group**](Group.md) |  | [optional] 
**root_node_name** | **str** | The querys&#39; root node name | [optional] 
**suppress_metric_attributes** | **bool** | The querys&#39; suppress metric attributes | [optional] 
**variables** | [**Variable**](Variable.md) |  | [optional] 

## Example

```python
from openapi_client.models.query1 import Query1

# TODO update the JSON string below
json = "{}"
# create an instance of Query1 from a JSON string
query1_instance = Query1.from_json(json)
# print the JSON string representation of the object
print(Query1.to_json())

# convert the object into a dict
query1_dict = query1_instance.to_dict()
# create an instance of Query1 from a dict
query1_from_dict = Query1.from_dict(query1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


