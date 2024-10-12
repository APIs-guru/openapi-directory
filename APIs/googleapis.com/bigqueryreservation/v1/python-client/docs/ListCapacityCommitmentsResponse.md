# ListCapacityCommitmentsResponse

The response for ReservationService.ListCapacityCommitments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_commitments** | [**List[CapacityCommitment]**](CapacityCommitment.md) | List of capacity commitments visible to the user. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_capacity_commitments_response import ListCapacityCommitmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCapacityCommitmentsResponse from a JSON string
list_capacity_commitments_response_instance = ListCapacityCommitmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCapacityCommitmentsResponse.to_json())

# convert the object into a dict
list_capacity_commitments_response_dict = list_capacity_commitments_response_instance.to_dict()
# create an instance of ListCapacityCommitmentsResponse from a dict
list_capacity_commitments_response_from_dict = ListCapacityCommitmentsResponse.from_dict(list_capacity_commitments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


