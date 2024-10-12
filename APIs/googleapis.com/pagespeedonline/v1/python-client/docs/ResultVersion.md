# ResultVersion

The version of PageSpeed used to generate these results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major** | **int** | The major version number of PageSpeed used to generate these results. | [optional] 
**minor** | **int** | The minor version number of PageSpeed used to generate these results. | [optional] 

## Example

```python
from openapi_client.models.result_version import ResultVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ResultVersion from a JSON string
result_version_instance = ResultVersion.from_json(json)
# print the JSON string representation of the object
print(ResultVersion.to_json())

# convert the object into a dict
result_version_dict = result_version_instance.to_dict()
# create an instance of ResultVersion from a dict
result_version_from_dict = ResultVersion.from_dict(result_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


