# ListConsentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consents** | [**List[Consent]**](Consent.md) | The returned Consents. The maximum number of Consents returned is determined by the value of page_size in the ListConsentsRequest. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_consents_response import ListConsentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsentsResponse from a JSON string
list_consents_response_instance = ListConsentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConsentsResponse.to_json())

# convert the object into a dict
list_consents_response_dict = list_consents_response_instance.to_dict()
# create an instance of ListConsentsResponse from a dict
list_consents_response_from_dict = ListConsentsResponse.from_dict(list_consents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


