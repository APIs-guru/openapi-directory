# VersionIssueCounts

Various counts of issues within a version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field_usage** | [**List[VersionUsageInCustomField]**](VersionUsageInCustomField.md) | List of custom fields using the version. | [optional] [readonly] 
**issue_count_with_custom_fields_showing_version** | **int** | Count of issues where a version custom field is set to the version. | [optional] [readonly] 
**issues_affected_count** | **int** | Count of issues where the &#x60;affectedVersion&#x60; is set to the version. | [optional] [readonly] 
**issues_fixed_count** | **int** | Count of issues where the &#x60;fixVersion&#x60; is set to the version. | [optional] [readonly] 
**var_self** | **str** | The URL of these count details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.version_issue_counts import VersionIssueCounts

# TODO update the JSON string below
json = "{}"
# create an instance of VersionIssueCounts from a JSON string
version_issue_counts_instance = VersionIssueCounts.from_json(json)
# print the JSON string representation of the object
print(VersionIssueCounts.to_json())

# convert the object into a dict
version_issue_counts_dict = version_issue_counts_instance.to_dict()
# create an instance of VersionIssueCounts from a dict
version_issue_counts_from_dict = VersionIssueCounts.from_dict(version_issue_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


