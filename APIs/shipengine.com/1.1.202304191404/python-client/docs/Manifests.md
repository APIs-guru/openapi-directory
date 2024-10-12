# Manifests

An array of manifest resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests** | [**List[Manifest]**](Manifest.md) | Resulting Manifests | [optional] 

## Example

```python
from openapi_client.models.manifests import Manifests

# TODO update the JSON string below
json = "{}"
# create an instance of Manifests from a JSON string
manifests_instance = Manifests.from_json(json)
# print the JSON string representation of the object
print(Manifests.to_json())

# convert the object into a dict
manifests_dict = manifests_instance.to_dict()
# create an instance of Manifests from a dict
manifests_from_dict = Manifests.from_dict(manifests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


