# ListHl7V2StoresResponse

Lists the HL7v2 stores in the given dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hl7_v2_stores** | [**List[Hl7V2Store]**](Hl7V2Store.md) | The returned HL7v2 stores. Won&#39;t be more HL7v2 stores than the value of page_size in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_hl7_v2_stores_response import ListHl7V2StoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHl7V2StoresResponse from a JSON string
list_hl7_v2_stores_response_instance = ListHl7V2StoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListHl7V2StoresResponse.to_json())

# convert the object into a dict
list_hl7_v2_stores_response_dict = list_hl7_v2_stores_response_instance.to_dict()
# create an instance of ListHl7V2StoresResponse from a dict
list_hl7_v2_stores_response_from_dict = ListHl7V2StoresResponse.from_dict(list_hl7_v2_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


