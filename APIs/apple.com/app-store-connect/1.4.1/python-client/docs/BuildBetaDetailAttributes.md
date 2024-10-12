# BuildBetaDetailAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_notify_enabled** | **bool** |  | [optional] 
**external_build_state** | [**ExternalBetaState**](ExternalBetaState.md) |  | [optional] 
**internal_build_state** | [**InternalBetaState**](InternalBetaState.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_beta_detail_attributes import BuildBetaDetailAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaDetailAttributes from a JSON string
build_beta_detail_attributes_instance = BuildBetaDetailAttributes.from_json(json)
# print the JSON string representation of the object
print(BuildBetaDetailAttributes.to_json())

# convert the object into a dict
build_beta_detail_attributes_dict = build_beta_detail_attributes_instance.to_dict()
# create an instance of BuildBetaDetailAttributes from a dict
build_beta_detail_attributes_from_dict = BuildBetaDetailAttributes.from_dict(build_beta_detail_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


