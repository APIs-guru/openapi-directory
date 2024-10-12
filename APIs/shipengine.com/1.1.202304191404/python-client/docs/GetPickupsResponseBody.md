# GetPickupsResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PaginationLink**](PaginationLink.md) | Helpful links to other pages of results | [readonly] 
**page** | **int** | Current page of the list pickups results | [readonly] 
**pages** | **int** | Total number of pages for list pickups results | [readonly] 
**pickups** | [**List[Pickup]**](Pickup.md) | An array of pickups associated with the user&#39;s account. | 
**total** | **int** | The total number of pickups returned | [readonly] 
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 

## Example

```python
from openapi_client.models.get_pickups_response_body import GetPickupsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetPickupsResponseBody from a JSON string
get_pickups_response_body_instance = GetPickupsResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetPickupsResponseBody.to_json())

# convert the object into a dict
get_pickups_response_body_dict = get_pickups_response_body_instance.to_dict()
# create an instance of GetPickupsResponseBody from a dict
get_pickups_response_body_from_dict = GetPickupsResponseBody.from_dict(get_pickups_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


