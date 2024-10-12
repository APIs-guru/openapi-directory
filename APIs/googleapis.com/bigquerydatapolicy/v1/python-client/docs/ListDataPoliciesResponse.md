# ListDataPoliciesResponse

Response message for the ListDataPolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_policies** | [**List[DataPolicy]**](DataPolicy.md) | Data policies that belong to the requested project. | [optional] 
**next_page_token** | **str** | Token used to retrieve the next page of results, or empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.list_data_policies_response import ListDataPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDataPoliciesResponse from a JSON string
list_data_policies_response_instance = ListDataPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDataPoliciesResponse.to_json())

# convert the object into a dict
list_data_policies_response_dict = list_data_policies_response_instance.to_dict()
# create an instance of ListDataPoliciesResponse from a dict
list_data_policies_response_from_dict = ListDataPoliciesResponse.from_dict(list_data_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


