# PurgeParameters

Parameters required for endpoint purge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_paths** | **List[str]** | The path to the content to be purged. Can describe a file path or a wild card directory. | 

## Example

```python
from openapi_client.models.purge_parameters import PurgeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PurgeParameters from a JSON string
purge_parameters_instance = PurgeParameters.from_json(json)
# print the JSON string representation of the object
print(PurgeParameters.to_json())

# convert the object into a dict
purge_parameters_dict = purge_parameters_instance.to_dict()
# create an instance of PurgeParameters from a dict
purge_parameters_from_dict = PurgeParameters.from_dict(purge_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


