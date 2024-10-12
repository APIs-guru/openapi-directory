# PaginatedModelList

A paginated list of Models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[Model]**](Model.md) | An array of objects of type Model. | [optional] 

## Example

```python
from openapi_client.models.paginated_model_list import PaginatedModelList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedModelList from a JSON string
paginated_model_list_instance = PaginatedModelList.from_json(json)
# print the JSON string representation of the object
print(PaginatedModelList.to_json())

# convert the object into a dict
paginated_model_list_dict = paginated_model_list_instance.to_dict()
# create an instance of PaginatedModelList from a dict
paginated_model_list_from_dict = PaginatedModelList.from_dict(paginated_model_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


