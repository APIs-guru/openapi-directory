# LicenseAssignmentList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[LicenseAssignment]**](LicenseAssignment.md) | The LicenseAssignments in this page of results. | [optional] 
**kind** | **str** | Identifies the resource as a collection of LicenseAssignments. | [optional] [default to 'licensing#licenseAssignmentList']
**next_page_token** | **str** | The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The &#x60;maxResults&#x60; query string is related to the &#x60;nextPageToken&#x60; since &#x60;maxResults&#x60; determines how many entries are returned on each next page. | [optional] 

## Example

```python
from openapi_client.models.license_assignment_list import LicenseAssignmentList

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseAssignmentList from a JSON string
license_assignment_list_instance = LicenseAssignmentList.from_json(json)
# print the JSON string representation of the object
print(LicenseAssignmentList.to_json())

# convert the object into a dict
license_assignment_list_dict = license_assignment_list_instance.to_dict()
# create an instance of LicenseAssignmentList from a dict
license_assignment_list_from_dict = LicenseAssignmentList.from_dict(license_assignment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


