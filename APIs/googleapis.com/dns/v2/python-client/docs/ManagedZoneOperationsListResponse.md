# ManagedZoneOperationsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZoneOperationsListResponse']
**next_page_token** | **str** | The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. | [optional] 
**operations** | [**List[Operation]**](Operation.md) | The operation resources. | [optional] 

## Example

```python
from openapi_client.models.managed_zone_operations_list_response import ManagedZoneOperationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneOperationsListResponse from a JSON string
managed_zone_operations_list_response_instance = ManagedZoneOperationsListResponse.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneOperationsListResponse.to_json())

# convert the object into a dict
managed_zone_operations_list_response_dict = managed_zone_operations_list_response_instance.to_dict()
# create an instance of ManagedZoneOperationsListResponse from a dict
managed_zone_operations_list_response_from_dict = ManagedZoneOperationsListResponse.from_dict(managed_zone_operations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


