# ListPartnersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListPartners&#x60; method to retrieve the next page of results. | [optional] 
**partners** | [**List[Partner]**](Partner.md) | The list of partners. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.list_partners_response import ListPartnersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPartnersResponse from a JSON string
list_partners_response_instance = ListPartnersResponse.from_json(json)
# print the JSON string representation of the object
print(ListPartnersResponse.to_json())

# convert the object into a dict
list_partners_response_dict = list_partners_response_instance.to_dict()
# create an instance of ListPartnersResponse from a dict
list_partners_response_from_dict = ListPartnersResponse.from_dict(list_partners_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


