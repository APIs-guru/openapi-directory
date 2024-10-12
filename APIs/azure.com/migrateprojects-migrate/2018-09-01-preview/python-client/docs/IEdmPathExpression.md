# IEdmPathExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression_kind** | **str** |  | [optional] [readonly] 
**path** | **str** |  | [optional] [readonly] 
**path_segments** | **List[str]** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_path_expression import IEdmPathExpression

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmPathExpression from a JSON string
i_edm_path_expression_instance = IEdmPathExpression.from_json(json)
# print the JSON string representation of the object
print(IEdmPathExpression.to_json())

# convert the object into a dict
i_edm_path_expression_dict = i_edm_path_expression_instance.to_dict()
# create an instance of IEdmPathExpression from a dict
i_edm_path_expression_from_dict = IEdmPathExpression.from_dict(i_edm_path_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


