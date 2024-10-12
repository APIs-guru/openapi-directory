# BuildInfo

Google Cloud Build information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_build_id** | **str** | The Google Cloud Build id. Example: \&quot;f966068f-08b2-42c8-bdfe-74137dff2bf9\&quot; | [optional] 

## Example

```python
from openapi_client.models.build_info import BuildInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BuildInfo from a JSON string
build_info_instance = BuildInfo.from_json(json)
# print the JSON string representation of the object
print(BuildInfo.to_json())

# convert the object into a dict
build_info_dict = build_info_instance.to_dict()
# create an instance of BuildInfo from a dict
build_info_from_dict = BuildInfo.from_dict(build_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


