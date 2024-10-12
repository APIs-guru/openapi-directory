# DtlEnvironment

An environment, which is essentially an ARM template deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnvironmentProperties**](EnvironmentProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dtl_environment import DtlEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of DtlEnvironment from a JSON string
dtl_environment_instance = DtlEnvironment.from_json(json)
# print the JSON string representation of the object
print(DtlEnvironment.to_json())

# convert the object into a dict
dtl_environment_dict = dtl_environment_instance.to_dict()
# create an instance of DtlEnvironment from a dict
dtl_environment_from_dict = DtlEnvironment.from_dict(dtl_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


