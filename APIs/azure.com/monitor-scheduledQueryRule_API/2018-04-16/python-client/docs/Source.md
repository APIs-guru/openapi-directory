# Source

Specifies the log search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_resources** | **List[str]** | List of  Resource referred into query | [optional] 
**data_source_id** | **str** | The resource uri over which log search query is to be run. | 
**query** | **str** | Log search query. Required for action type - AlertingAction | [optional] 
**query_type** | [**QueryType**](QueryType.md) |  | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


