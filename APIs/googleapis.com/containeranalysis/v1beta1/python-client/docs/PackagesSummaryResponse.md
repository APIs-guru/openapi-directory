# PackagesSummaryResponse

A summary of the packages found within the given resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses_summary** | [**List[LicensesSummary]**](LicensesSummary.md) | A listing by license name of each of the licenses and their counts. | [optional] 
**resource_url** | **str** | The unique URL of the image or the container for which this summary applies. | [optional] 

## Example

```python
from openapi_client.models.packages_summary_response import PackagesSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PackagesSummaryResponse from a JSON string
packages_summary_response_instance = PackagesSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(PackagesSummaryResponse.to_json())

# convert the object into a dict
packages_summary_response_dict = packages_summary_response_instance.to_dict()
# create an instance of PackagesSummaryResponse from a dict
packages_summary_response_from_dict = PackagesSummaryResponse.from_dict(packages_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


