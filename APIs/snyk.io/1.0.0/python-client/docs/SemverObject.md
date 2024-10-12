# SemverObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unaffected** | **str** | The (semver) range of versions NOT vulnerable to this issue. *Deprecated* and should not be used. | [optional] 
**vulnerable** | **str** | The (semver) range of versions vulnerable to this issue. | [optional] 

## Example

```python
from openapi_client.models.semver_object import SemverObject

# TODO update the JSON string below
json = "{}"
# create an instance of SemverObject from a JSON string
semver_object_instance = SemverObject.from_json(json)
# print the JSON string representation of the object
print(SemverObject.to_json())

# convert the object into a dict
semver_object_dict = semver_object_instance.to_dict()
# create an instance of SemverObject from a dict
semver_object_from_dict = SemverObject.from_dict(semver_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


