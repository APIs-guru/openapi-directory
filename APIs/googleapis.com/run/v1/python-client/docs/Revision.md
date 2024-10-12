# Revision

Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;serving.knative.dev/v1\&quot;. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;Revision\&quot;. | [optional] 
**metadata** | [**ObjectMeta**](ObjectMeta.md) |  | [optional] 
**spec** | [**RevisionSpec**](RevisionSpec.md) |  | [optional] 
**status** | [**RevisionStatus**](RevisionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.revision import Revision

# TODO update the JSON string below
json = "{}"
# create an instance of Revision from a JSON string
revision_instance = Revision.from_json(json)
# print the JSON string representation of the object
print(Revision.to_json())

# convert the object into a dict
revision_dict = revision_instance.to_dict()
# create an instance of Revision from a dict
revision_from_dict = Revision.from_dict(revision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


