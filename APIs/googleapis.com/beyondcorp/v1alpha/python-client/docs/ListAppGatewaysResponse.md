# ListAppGatewaysResponse

Response message for BeyondCorp.ListAppGateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_gateways** | [**List[AppGateway]**](AppGateway.md) | A list of BeyondCorp AppGateways in the project. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_app_gateways_response import ListAppGatewaysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAppGatewaysResponse from a JSON string
list_app_gateways_response_instance = ListAppGatewaysResponse.from_json(json)
# print the JSON string representation of the object
print(ListAppGatewaysResponse.to_json())

# convert the object into a dict
list_app_gateways_response_dict = list_app_gateways_response_instance.to_dict()
# create an instance of ListAppGatewaysResponse from a dict
list_app_gateways_response_from_dict = ListAppGatewaysResponse.from_dict(list_app_gateways_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


