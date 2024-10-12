# ImportTargetsRequestAnyOfTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | default branch of the repo (Please contact support if you want to import a non default repo branch) | 
**name** | **str** | name of the repo | 
**owner** | **str** | for Github: account owner of the repository; for Azure Repos, this is &#x60;Project ID&#x60; | 

## Example

```python
from openapi_client.models.import_targets_request_any_of_target import ImportTargetsRequestAnyOfTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTargetsRequestAnyOfTarget from a JSON string
import_targets_request_any_of_target_instance = ImportTargetsRequestAnyOfTarget.from_json(json)
# print the JSON string representation of the object
print(ImportTargetsRequestAnyOfTarget.to_json())

# convert the object into a dict
import_targets_request_any_of_target_dict = import_targets_request_any_of_target_instance.to_dict()
# create an instance of ImportTargetsRequestAnyOfTarget from a dict
import_targets_request_any_of_target_from_dict = ImportTargetsRequestAnyOfTarget.from_dict(import_targets_request_any_of_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


