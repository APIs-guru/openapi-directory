# AvailableAppBuilds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_builds** | **List[str]** | List of available app builds. | [optional] 

## Example

```python
from openapi_client.models.available_app_builds import AvailableAppBuilds

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableAppBuilds from a JSON string
available_app_builds_instance = AvailableAppBuilds.from_json(json)
# print the JSON string representation of the object
print(AvailableAppBuilds.to_json())

# convert the object into a dict
available_app_builds_dict = available_app_builds_instance.to_dict()
# create an instance of AvailableAppBuilds from a dict
available_app_builds_from_dict = AvailableAppBuilds.from_dict(available_app_builds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


