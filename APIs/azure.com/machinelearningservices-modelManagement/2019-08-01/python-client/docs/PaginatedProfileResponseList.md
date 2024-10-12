# PaginatedProfileResponseList

A paginated list of ProfileResponses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[ProfileResponse]**](ProfileResponse.md) | An array of objects of type ProfileResponse. | [optional] 

## Example

```python
from openapi_client.models.paginated_profile_response_list import PaginatedProfileResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedProfileResponseList from a JSON string
paginated_profile_response_list_instance = PaginatedProfileResponseList.from_json(json)
# print the JSON string representation of the object
print(PaginatedProfileResponseList.to_json())

# convert the object into a dict
paginated_profile_response_list_dict = paginated_profile_response_list_instance.to_dict()
# create an instance of PaginatedProfileResponseList from a dict
paginated_profile_response_list_from_dict = PaginatedProfileResponseList.from_dict(paginated_profile_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


