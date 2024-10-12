# PaginatedComputeResourcesList

Paginated list of Machine Learning compute objects wrapped in ARM resource envelope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[ComputeResource]**](ComputeResource.md) | An array of Machine Learning compute objects wrapped in ARM resource envelope. | [optional] 

## Example

```python
from openapi_client.models.paginated_compute_resources_list import PaginatedComputeResourcesList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedComputeResourcesList from a JSON string
paginated_compute_resources_list_instance = PaginatedComputeResourcesList.from_json(json)
# print the JSON string representation of the object
print(PaginatedComputeResourcesList.to_json())

# convert the object into a dict
paginated_compute_resources_list_dict = paginated_compute_resources_list_instance.to_dict()
# create an instance of PaginatedComputeResourcesList from a dict
paginated_compute_resources_list_from_dict = PaginatedComputeResourcesList.from_dict(paginated_compute_resources_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


