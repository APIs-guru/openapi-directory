# SourceRepository

Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_url** | **str** | Output only. The URL pointing to the hosted repository where the function were defined at the time of deployment. It always points to a specific commit in the format described above. | [optional] [readonly] 
**url** | **str** | The URL pointing to the hosted repository where the function is defined. There are supported Cloud Source Repository URLs in the following formats: To refer to a specific commit: &#x60;https://source.developers.google.com/projects/*/repos/*/revisions/*/paths/*&#x60; To refer to a moveable alias (branch): &#x60;https://source.developers.google.com/projects/*/repos/*/moveable-aliases/*/paths/*&#x60; In particular, to refer to HEAD use &#x60;master&#x60; moveable alias. To refer to a specific fixed alias (tag): &#x60;https://source.developers.google.com/projects/*/repos/*/fixed-aliases/*/paths/*&#x60; You may omit &#x60;paths/*&#x60; if you want to use the main directory. | [optional] 

## Example

```python
from openapi_client.models.source_repository import SourceRepository

# TODO update the JSON string below
json = "{}"
# create an instance of SourceRepository from a JSON string
source_repository_instance = SourceRepository.from_json(json)
# print the JSON string representation of the object
print(SourceRepository.to_json())

# convert the object into a dict
source_repository_dict = source_repository_instance.to_dict()
# create an instance of SourceRepository from a dict
source_repository_from_dict = SourceRepository.from_dict(source_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


