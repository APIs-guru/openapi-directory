# OperatorDbt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbt_arguments** | **str** |  | [optional] 
**docker_image** | **str** |  | [optional] 
**git_repo_branch** | **str** |  | [optional] 
**git_repo_url** | **str** |  | 

## Example

```python
from openapi_client.models.operator_dbt import OperatorDbt

# TODO update the JSON string below
json = "{}"
# create an instance of OperatorDbt from a JSON string
operator_dbt_instance = OperatorDbt.from_json(json)
# print the JSON string representation of the object
print(OperatorDbt.to_json())

# convert the object into a dict
operator_dbt_dict = operator_dbt_instance.to_dict()
# create an instance of OperatorDbt from a dict
operator_dbt_from_dict = OperatorDbt.from_dict(operator_dbt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


