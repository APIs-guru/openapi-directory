# ProjectInfo

A reference to a Google Cloud Platform (GCP) `Project`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The user-assigned display name of the GCP &#x60;Project&#x60;, for example: &#x60;My App&#x60; | [optional] 
**location_id** | **str** | The ID of the Project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). Not all Projects will have this field populated. If it is not populated, it means that the Project does not yet have a default GCP resource location. To set a Project&#39;s default GCP resource location, call [&#x60;FinalizeDefaultLocation&#x60;](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. | [optional] 
**project** | **str** | The resource name of the GCP &#x60;Project&#x60; to which Firebase resources can be added, in the format: projects/PROJECT_IDENTIFIER Refer to the &#x60;FirebaseProject&#x60; [&#x60;name&#x60;](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. | [optional] 

## Example

```python
from openapi_client.models.project_info import ProjectInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectInfo from a JSON string
project_info_instance = ProjectInfo.from_json(json)
# print the JSON string representation of the object
print(ProjectInfo.to_json())

# convert the object into a dict
project_info_dict = project_info_instance.to_dict()
# create an instance of ProjectInfo from a dict
project_info_from_dict = ProjectInfo.from_dict(project_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


