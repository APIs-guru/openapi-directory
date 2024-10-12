# OnDeployUpdatePolicy

Security patches are only applied when a function is redeployed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runtime_version** | **str** | Output only. contains the runtime version which was used during latest function deployment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.on_deploy_update_policy import OnDeployUpdatePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of OnDeployUpdatePolicy from a JSON string
on_deploy_update_policy_instance = OnDeployUpdatePolicy.from_json(json)
# print the JSON string representation of the object
print(OnDeployUpdatePolicy.to_json())

# convert the object into a dict
on_deploy_update_policy_dict = on_deploy_update_policy_instance.to_dict()
# create an instance of OnDeployUpdatePolicy from a dict
on_deploy_update_policy_from_dict = OnDeployUpdatePolicy.from_dict(on_deploy_update_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


