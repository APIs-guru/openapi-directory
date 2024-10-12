# PaginatedRequisitionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Requisition]**](Requisition.md) |  | [optional] 

## Example

```python
from openapi_client.models.paginated_requisition_list import PaginatedRequisitionList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedRequisitionList from a JSON string
paginated_requisition_list_instance = PaginatedRequisitionList.from_json(json)
# print the JSON string representation of the object
print(PaginatedRequisitionList.to_json())

# convert the object into a dict
paginated_requisition_list_dict = paginated_requisition_list_instance.to_dict()
# create an instance of PaginatedRequisitionList from a dict
paginated_requisition_list_from_dict = PaginatedRequisitionList.from_dict(paginated_requisition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


