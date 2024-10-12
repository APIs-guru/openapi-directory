# ContainerForProjectFeatures

The list of features on a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[ProjectFeature]**](ProjectFeature.md) | The project features. | [optional] 

## Example

```python
from openapi_client.models.container_for_project_features import ContainerForProjectFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerForProjectFeatures from a JSON string
container_for_project_features_instance = ContainerForProjectFeatures.from_json(json)
# print the JSON string representation of the object
print(ContainerForProjectFeatures.to_json())

# convert the object into a dict
container_for_project_features_dict = container_for_project_features_instance.to_dict()
# create an instance of ContainerForProjectFeatures from a dict
container_for_project_features_from_dict = ContainerForProjectFeatures.from_dict(container_for_project_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


