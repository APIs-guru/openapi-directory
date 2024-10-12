# GetTenderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Tender**](Tender.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_tender_response import GetTenderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTenderResponse from a JSON string
get_tender_response_instance = GetTenderResponse.from_json(json)
# print the JSON string representation of the object
print(GetTenderResponse.to_json())

# convert the object into a dict
get_tender_response_dict = get_tender_response_instance.to_dict()
# create an instance of GetTenderResponse from a dict
get_tender_response_from_dict = GetTenderResponse.from_dict(get_tender_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


