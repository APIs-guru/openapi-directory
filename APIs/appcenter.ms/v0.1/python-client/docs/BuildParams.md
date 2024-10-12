# BuildParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug** | **bool** | Run build in debug mode | [optional] 
**source_version** | **str** | Version to build which represents the full Git commit reference | [optional] 

## Example

```python
from openapi_client.models.build_params import BuildParams

# TODO update the JSON string below
json = "{}"
# create an instance of BuildParams from a JSON string
build_params_instance = BuildParams.from_json(json)
# print the JSON string representation of the object
print(BuildParams.to_json())

# convert the object into a dict
build_params_dict = build_params_instance.to_dict()
# create an instance of BuildParams from a dict
build_params_from_dict = BuildParams.from_dict(build_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


