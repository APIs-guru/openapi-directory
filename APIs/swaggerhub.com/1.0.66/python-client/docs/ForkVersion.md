# ForkVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name for the forked definition. Must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html). Can be the name of an existing definition, in which case the fork will become a new version in that definition, unless that version already exists. | 
**owner** | **str** | The account to fork into. Can be an organization or user name. Case-sensitive. The authenticated user must have permissions to create definitions in this account. | 
**private** | **bool** | Whether the forked version should be public (&#x60;false&#x60;) or private (&#x60;true&#x60;). If the value is not set, the original version&#39;s setting will be used. | [optional] 
**project** | **str** | If forking into an organization, you can optionally specify an existing project to add the forked definition to. | [optional] 
**version** | **str** | Version identifier for the forked definition. Must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format). If forking into an existing definition, this version must not already exist. | 

## Example

```python
from openapi_client.models.fork_version import ForkVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ForkVersion from a JSON string
fork_version_instance = ForkVersion.from_json(json)
# print the JSON string representation of the object
print(ForkVersion.to_json())

# convert the object into a dict
fork_version_dict = fork_version_instance.to_dict()
# create an instance of ForkVersion from a dict
fork_version_from_dict = ForkVersion.from_dict(fork_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


