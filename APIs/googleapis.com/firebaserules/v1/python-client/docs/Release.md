# Release

`Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the release was created. | [optional] [readonly] 
**name** | **str** | Required. Format: &#x60;projects/{project_id}/releases/{release_id}&#x60; | [optional] 
**ruleset_name** | **str** | Required. Name of the &#x60;Ruleset&#x60; referred to by this &#x60;Release&#x60;. The &#x60;Ruleset&#x60; must exist for the &#x60;Release&#x60; to be created. | [optional] 
**update_time** | **str** | Output only. Time the release was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.release import Release

# TODO update the JSON string below
json = "{}"
# create an instance of Release from a JSON string
release_instance = Release.from_json(json)
# print the JSON string representation of the object
print(Release.to_json())

# convert the object into a dict
release_dict = release_instance.to_dict()
# create an instance of Release from a dict
release_from_dict = Release.from_dict(release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


