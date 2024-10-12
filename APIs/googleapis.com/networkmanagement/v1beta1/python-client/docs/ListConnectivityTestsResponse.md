# ListConnectivityTestsResponse

Response for the `ListConnectivityTests` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token to fetch the next set of Connectivity Tests. | [optional] 
**resources** | [**List[ConnectivityTest]**](ConnectivityTest.md) | List of Connectivity Tests. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached (when querying all locations with &#x60;-&#x60;). | [optional] 

## Example

```python
from openapi_client.models.list_connectivity_tests_response import ListConnectivityTestsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectivityTestsResponse from a JSON string
list_connectivity_tests_response_instance = ListConnectivityTestsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConnectivityTestsResponse.to_json())

# convert the object into a dict
list_connectivity_tests_response_dict = list_connectivity_tests_response_instance.to_dict()
# create an instance of ListConnectivityTestsResponse from a dict
list_connectivity_tests_response_from_dict = ListConnectivityTestsResponse.from_dict(list_connectivity_tests_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


