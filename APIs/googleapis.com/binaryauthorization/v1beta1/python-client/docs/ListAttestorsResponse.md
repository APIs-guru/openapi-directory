# ListAttestorsResponse

Response message for BinauthzManagementService.ListAttestors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestors** | [**List[Attestor]**](Attestor.md) | The list of attestors. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the &#x60;ListAttestors&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_attestors_response import ListAttestorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAttestorsResponse from a JSON string
list_attestors_response_instance = ListAttestorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAttestorsResponse.to_json())

# convert the object into a dict
list_attestors_response_dict = list_attestors_response_instance.to_dict()
# create an instance of ListAttestorsResponse from a dict
list_attestors_response_from_dict = ListAttestorsResponse.from_dict(list_attestors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


