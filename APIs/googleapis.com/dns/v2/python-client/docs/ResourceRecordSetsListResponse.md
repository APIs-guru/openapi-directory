# ResourceRecordSetsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**kind** | **str** | Type of resource. | [optional] [default to 'dns#resourceRecordSetsListResponse']
**next_page_token** | **str** | The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even larger collections, one page at a time. However, if the collection changes between paginated list requests, the set of elements returned is an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. | [optional] 
**rrsets** | [**List[ResourceRecordSet]**](ResourceRecordSet.md) | The resource record set resources. | [optional] 

## Example

```python
from openapi_client.models.resource_record_sets_list_response import ResourceRecordSetsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRecordSetsListResponse from a JSON string
resource_record_sets_list_response_instance = ResourceRecordSetsListResponse.from_json(json)
# print the JSON string representation of the object
print(ResourceRecordSetsListResponse.to_json())

# convert the object into a dict
resource_record_sets_list_response_dict = resource_record_sets_list_response_instance.to_dict()
# create an instance of ResourceRecordSetsListResponse from a dict
resource_record_sets_list_response_from_dict = ResourceRecordSetsListResponse.from_dict(resource_record_sets_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


