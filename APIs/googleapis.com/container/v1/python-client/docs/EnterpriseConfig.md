# EnterpriseConfig

EnterpriseConfig is the cluster enterprise configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_tier** | **str** | Output only. [Output only] cluster_tier specifies the premium tier of the cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enterprise_config import EnterpriseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseConfig from a JSON string
enterprise_config_instance = EnterpriseConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseConfig.to_json())

# convert the object into a dict
enterprise_config_dict = enterprise_config_instance.to_dict()
# create an instance of EnterpriseConfig from a dict
enterprise_config_from_dict = EnterpriseConfig.from_dict(enterprise_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


