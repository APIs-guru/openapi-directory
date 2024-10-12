# DeleteAndReplaceVersionBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field_replacement_list** | [**List[CustomFieldReplacement]**](CustomFieldReplacement.md) | An array of custom field IDs (&#x60;customFieldId&#x60;) and version IDs (&#x60;moveTo&#x60;) to update when the fields contain the deleted version. | [optional] 
**move_affected_issues_to** | **int** | The ID of the version to update &#x60;affectedVersion&#x60; to when the field contains the deleted version. | [optional] 
**move_fix_issues_to** | **int** | The ID of the version to update &#x60;fixVersion&#x60; to when the field contains the deleted version. | [optional] 

## Example

```python
from openapi_client.models.delete_and_replace_version_bean import DeleteAndReplaceVersionBean

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteAndReplaceVersionBean from a JSON string
delete_and_replace_version_bean_instance = DeleteAndReplaceVersionBean.from_json(json)
# print the JSON string representation of the object
print(DeleteAndReplaceVersionBean.to_json())

# convert the object into a dict
delete_and_replace_version_bean_dict = delete_and_replace_version_bean_instance.to_dict()
# create an instance of DeleteAndReplaceVersionBean from a dict
delete_and_replace_version_bean_from_dict = DeleteAndReplaceVersionBean.from_dict(delete_and_replace_version_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


