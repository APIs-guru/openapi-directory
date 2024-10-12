# PaginatedServiceList

A paginated list of Services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[ServiceResponseBase]**](ServiceResponseBase.md) | An array of objects of type Service. | [optional] 

## Example

```python
from openapi_client.models.paginated_service_list import PaginatedServiceList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedServiceList from a JSON string
paginated_service_list_instance = PaginatedServiceList.from_json(json)
# print the JSON string representation of the object
print(PaginatedServiceList.to_json())

# convert the object into a dict
paginated_service_list_dict = paginated_service_list_instance.to_dict()
# create an instance of PaginatedServiceList from a dict
paginated_service_list_from_dict = PaginatedServiceList.from_dict(paginated_service_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


