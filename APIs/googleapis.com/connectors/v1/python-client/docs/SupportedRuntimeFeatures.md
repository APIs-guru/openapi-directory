# SupportedRuntimeFeatures

Supported runtime features of a connector version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_apis** | **bool** | Specifies if the connector supports action apis like &#39;executeAction&#39;. | [optional] 
**entity_apis** | **bool** | Specifies if the connector supports entity apis like &#39;createEntity&#39;. | [optional] 
**sql_query** | **bool** | Specifies if the connector supports &#39;ExecuteSqlQuery&#39; operation. | [optional] 

## Example

```python
from openapi_client.models.supported_runtime_features import SupportedRuntimeFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedRuntimeFeatures from a JSON string
supported_runtime_features_instance = SupportedRuntimeFeatures.from_json(json)
# print the JSON string representation of the object
print(SupportedRuntimeFeatures.to_json())

# convert the object into a dict
supported_runtime_features_dict = supported_runtime_features_instance.to_dict()
# create an instance of SupportedRuntimeFeatures from a dict
supported_runtime_features_from_dict = SupportedRuntimeFeatures.from_dict(supported_runtime_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


