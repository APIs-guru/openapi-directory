# QueryTroubleshootingParameters

Parameters that define the resource to query the troubleshooting result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_resource_id** | **str** | The target resource ID to query the troubleshooting result. | 

## Example

```python
from openapi_client.models.query_troubleshooting_parameters import QueryTroubleshootingParameters

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTroubleshootingParameters from a JSON string
query_troubleshooting_parameters_instance = QueryTroubleshootingParameters.from_json(json)
# print the JSON string representation of the object
print(QueryTroubleshootingParameters.to_json())

# convert the object into a dict
query_troubleshooting_parameters_dict = query_troubleshooting_parameters_instance.to_dict()
# create an instance of QueryTroubleshootingParameters from a dict
query_troubleshooting_parameters_from_dict = QueryTroubleshootingParameters.from_dict(query_troubleshooting_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


