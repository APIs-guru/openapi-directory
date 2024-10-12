# DtlEnvironmentFragment

An environment, which is essentially an ARM template deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnvironmentPropertiesFragment**](EnvironmentPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.dtl_environment_fragment import DtlEnvironmentFragment

# TODO update the JSON string below
json = "{}"
# create an instance of DtlEnvironmentFragment from a JSON string
dtl_environment_fragment_instance = DtlEnvironmentFragment.from_json(json)
# print the JSON string representation of the object
print(DtlEnvironmentFragment.to_json())

# convert the object into a dict
dtl_environment_fragment_dict = dtl_environment_fragment_instance.to_dict()
# create an instance of DtlEnvironmentFragment from a dict
dtl_environment_fragment_from_dict = DtlEnvironmentFragment.from_dict(dtl_environment_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


