# Deployable

An artifact that can be deployed in some runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_uri** | **List[str]** | Resource URI for the artifact being deployed. | [optional] 

## Example

```python
from openapi_client.models.deployable import Deployable

# TODO update the JSON string below
json = "{}"
# create an instance of Deployable from a JSON string
deployable_instance = Deployable.from_json(json)
# print the JSON string representation of the object
print(Deployable.to_json())

# convert the object into a dict
deployable_dict = deployable_instance.to_dict()
# create an instance of Deployable from a dict
deployable_from_dict = Deployable.from_dict(deployable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


