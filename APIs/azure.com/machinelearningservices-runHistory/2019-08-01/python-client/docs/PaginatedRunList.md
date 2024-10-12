# PaginatedRunList

A paginated list of Runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The token used in retrieving the next page.  If null, there are no additional pages. | [optional] 
**next_link** | **str** | The link to the next page constructed using the continuationToken.  If null, there are no additional pages. | [optional] 
**value** | [**List[Run]**](Run.md) | An array of objects of type Run. | [optional] 

## Example

```python
from openapi_client.models.paginated_run_list import PaginatedRunList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedRunList from a JSON string
paginated_run_list_instance = PaginatedRunList.from_json(json)
# print the JSON string representation of the object
print(PaginatedRunList.to_json())

# convert the object into a dict
paginated_run_list_dict = paginated_run_list_instance.to_dict()
# create an instance of PaginatedRunList from a dict
paginated_run_list_from_dict = PaginatedRunList.from_dict(paginated_run_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


