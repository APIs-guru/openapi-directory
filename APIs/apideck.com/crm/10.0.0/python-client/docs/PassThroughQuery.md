# PassThroughQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_downstream_property** | **str** | All passthrough query parameters are passed along to the connector as is (?pass_through[search]&#x3D;leads becomes ?search&#x3D;leads) | [optional] 

## Example

```python
from openapi_client.models.pass_through_query import PassThroughQuery

# TODO update the JSON string below
json = "{}"
# create an instance of PassThroughQuery from a JSON string
pass_through_query_instance = PassThroughQuery.from_json(json)
# print the JSON string representation of the object
print(PassThroughQuery.to_json())

# convert the object into a dict
pass_through_query_dict = pass_through_query_instance.to_dict()
# create an instance of PassThroughQuery from a dict
pass_through_query_from_dict = PassThroughQuery.from_dict(pass_through_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


