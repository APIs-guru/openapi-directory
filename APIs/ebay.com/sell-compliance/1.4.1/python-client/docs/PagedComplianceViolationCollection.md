# PagedComplianceViolationCollection

This type is the base response type of the getListingViolations method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the getListingViolations call request that produced the current page of the result set. | [optional] 
**limit** | **int** | The maximum number of listing violations returned per page of the result set. The limit and offset query parameters are used to control the pagination of the output. Note: If this is the last or only page in the result set, it may contain fewer listing violations than the limit value. To determine the number of pages in the result set, divide this value into the value of total and round up to the next integer. Default: 50 Max: 200 | [optional] 
**listing_violations** | [**List[ComplianceViolation]**](ComplianceViolation.md) | An array of listing violations that match the criteria in the call request, including pagination control {if set). As long as there is at least one listing violation that matches the input criteria, this container will be returned. If no listing violations are found for the seller, an HTTP status code of 204 No Content is returned, and there is no response body. | [optional] 
**next** | **str** | The getListingViolations call URI to use to view the next page of the result set. For example, the following URI returns listing violations 21 thru 30 from the collection of policy violations: path/listing_violation?limit&#x3D;10&amp;amp;offset&#x3D;20 This field is only returned if an additional page of listing violations exists. | [optional] 
**offset** | **int** | This integer value shows the offset of the current page of results. The offset value controls the first listing violation in the result set that will be displayed at the top of the response. The offset and limit query parameters are used to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves listing violations 11 thru 20 from the resulting collection of violations. Note: This feature employs a zero-based index, where the first item in the list has an offset of 0. Default: 0 {zero) | [optional] 
**prev** | **str** | The getListingViolations call URI to use to view the previous page of the result set. For example, the following URI returns listing violations 1 thru 10 from the collection of policy violations: path/listing_violation?limit&#x3D;10&amp;amp;offset&#x3D;0 This field is only returned if an previous page of listing violations exists. | [optional] 
**total** | **int** | The total number of listing violations in the result set. If this value is higher than the limit value, there are multiple pages in the result set to view. | [optional] 

## Example

```python
from openapi_client.models.paged_compliance_violation_collection import PagedComplianceViolationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PagedComplianceViolationCollection from a JSON string
paged_compliance_violation_collection_instance = PagedComplianceViolationCollection.from_json(json)
# print the JSON string representation of the object
print(PagedComplianceViolationCollection.to_json())

# convert the object into a dict
paged_compliance_violation_collection_dict = paged_compliance_violation_collection_instance.to_dict()
# create an instance of PagedComplianceViolationCollection from a dict
paged_compliance_violation_collection_from_dict = PagedComplianceViolationCollection.from_dict(paged_compliance_violation_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


