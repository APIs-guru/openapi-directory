# ManagedZonesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**kind** | **str** | Type of resource. | [optional] [default to 'dns#managedZonesListResponse']
**managed_zones** | [**List[ManagedZone]**](ManagedZone.md) | The managed zone resources. | [optional] 
**next_page_token** | **str** | The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. | [optional] 

## Example

```python
from openapi_client.models.managed_zones_list_response import ManagedZonesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZonesListResponse from a JSON string
managed_zones_list_response_instance = ManagedZonesListResponse.from_json(json)
# print the JSON string representation of the object
print(ManagedZonesListResponse.to_json())

# convert the object into a dict
managed_zones_list_response_dict = managed_zones_list_response_instance.to_dict()
# create an instance of ManagedZonesListResponse from a dict
managed_zones_list_response_from_dict = ManagedZonesListResponse.from_dict(managed_zones_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


