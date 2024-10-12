# NewVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private** | **bool** | Whether the new version should be public (&#x60;false&#x60;) or private (&#x60;true&#x60;) | [optional] 
**version** | **str** | The version identifier for the new version | 

## Example

```python
from openapi_client.models.new_version import NewVersion

# TODO update the JSON string below
json = "{}"
# create an instance of NewVersion from a JSON string
new_version_instance = NewVersion.from_json(json)
# print the JSON string representation of the object
print(NewVersion.to_json())

# convert the object into a dict
new_version_dict = new_version_instance.to_dict()
# create an instance of NewVersion from a dict
new_version_from_dict = NewVersion.from_dict(new_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


