# ListAllLicensesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ListAllLicensesRequestFilters**](ListAllLicensesRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_all_licenses_request import ListAllLicensesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllLicensesRequest from a JSON string
list_all_licenses_request_instance = ListAllLicensesRequest.from_json(json)
# print the JSON string representation of the object
print(ListAllLicensesRequest.to_json())

# convert the object into a dict
list_all_licenses_request_dict = list_all_licenses_request_instance.to_dict()
# create an instance of ListAllLicensesRequest from a dict
list_all_licenses_request_from_dict = ListAllLicensesRequest.from_dict(list_all_licenses_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


