# PrincipalComponentInfo

Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cumulative_explained_variance_ratio** | **float** | The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio. | [optional] 
**explained_variance** | **float** | Explained variance by this principal component, which is simply the eigenvalue. | [optional] 
**explained_variance_ratio** | **float** | Explained_variance over the total explained variance. | [optional] 
**principal_component_id** | **str** | Id of the principal component. | [optional] 

## Example

```python
from openapi_client.models.principal_component_info import PrincipalComponentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PrincipalComponentInfo from a JSON string
principal_component_info_instance = PrincipalComponentInfo.from_json(json)
# print the JSON string representation of the object
print(PrincipalComponentInfo.to_json())

# convert the object into a dict
principal_component_info_dict = principal_component_info_instance.to_dict()
# create an instance of PrincipalComponentInfo from a dict
principal_component_info_from_dict = PrincipalComponentInfo.from_dict(principal_component_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


