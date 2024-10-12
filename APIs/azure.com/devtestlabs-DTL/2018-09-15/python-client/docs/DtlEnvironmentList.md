# DtlEnvironmentList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[DtlEnvironment]**](DtlEnvironment.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.dtl_environment_list import DtlEnvironmentList

# TODO update the JSON string below
json = "{}"
# create an instance of DtlEnvironmentList from a JSON string
dtl_environment_list_instance = DtlEnvironmentList.from_json(json)
# print the JSON string representation of the object
print(DtlEnvironmentList.to_json())

# convert the object into a dict
dtl_environment_list_dict = dtl_environment_list_instance.to_dict()
# create an instance of DtlEnvironmentList from a dict
dtl_environment_list_from_dict = DtlEnvironmentList.from_dict(dtl_environment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


