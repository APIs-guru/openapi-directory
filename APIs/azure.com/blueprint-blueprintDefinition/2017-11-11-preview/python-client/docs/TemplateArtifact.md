# TemplateArtifact

Blueprint artifact deploys Azure resource manager template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TemplateArtifactProperties**](TemplateArtifactProperties.md) |  | 
**kind** | **str** | Specifies the kind of Blueprint artifact. | 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.template_artifact import TemplateArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateArtifact from a JSON string
template_artifact_instance = TemplateArtifact.from_json(json)
# print the JSON string representation of the object
print(TemplateArtifact.to_json())

# convert the object into a dict
template_artifact_dict = template_artifact_instance.to_dict()
# create an instance of TemplateArtifact from a dict
template_artifact_from_dict = TemplateArtifact.from_dict(template_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


