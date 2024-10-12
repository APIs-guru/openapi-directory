# ListAdvertisersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertisers** | [**List[Advertiser]**](Advertiser.md) | The list of advertisers. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListAdvertisers&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_advertisers_response import ListAdvertisersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdvertisersResponse from a JSON string
list_advertisers_response_instance = ListAdvertisersResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdvertisersResponse.to_json())

# convert the object into a dict
list_advertisers_response_dict = list_advertisers_response_instance.to_dict()
# create an instance of ListAdvertisersResponse from a dict
list_advertisers_response_from_dict = ListAdvertisersResponse.from_dict(list_advertisers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


