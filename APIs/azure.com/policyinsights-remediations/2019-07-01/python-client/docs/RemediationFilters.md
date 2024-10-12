# RemediationFilters

The filters that will be applied to determine which resources to remediate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** | The resource locations that will be remediated. | [optional] 

## Example

```python
from openapi_client.models.remediation_filters import RemediationFilters

# TODO update the JSON string below
json = "{}"
# create an instance of RemediationFilters from a JSON string
remediation_filters_instance = RemediationFilters.from_json(json)
# print the JSON string representation of the object
print(RemediationFilters.to_json())

# convert the object into a dict
remediation_filters_dict = remediation_filters_instance.to_dict()
# create an instance of RemediationFilters from a dict
remediation_filters_from_dict = RemediationFilters.from_dict(remediation_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


