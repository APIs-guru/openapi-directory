# GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace

Restrictions namespace for example-based explanations overrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow** | **List[str]** | The list of allowed tags. | [optional] 
**deny** | **List[str]** | The list of deny tags. | [optional] 
**namespace_name** | **str** | The namespace name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_examples_restrictions_namespace import GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace from a JSON string
google_cloud_aiplatform_v1beta1_examples_restrictions_namespace_instance = GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_examples_restrictions_namespace_dict = google_cloud_aiplatform_v1beta1_examples_restrictions_namespace_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace from a dict
google_cloud_aiplatform_v1beta1_examples_restrictions_namespace_from_dict = GoogleCloudAiplatformV1beta1ExamplesRestrictionsNamespace.from_dict(google_cloud_aiplatform_v1beta1_examples_restrictions_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


