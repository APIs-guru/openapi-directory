# GroupLicensesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_license** | [**List[GroupLicense]**](GroupLicense.md) | A group license for a product approved for use in the enterprise. | [optional] 

## Example

```python
from openapi_client.models.group_licenses_list_response import GroupLicensesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupLicensesListResponse from a JSON string
group_licenses_list_response_instance = GroupLicensesListResponse.from_json(json)
# print the JSON string representation of the object
print(GroupLicensesListResponse.to_json())

# convert the object into a dict
group_licenses_list_response_dict = group_licenses_list_response_instance.to_dict()
# create an instance of GroupLicensesListResponse from a dict
group_licenses_list_response_from_dict = GroupLicensesListResponse.from_dict(group_licenses_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


