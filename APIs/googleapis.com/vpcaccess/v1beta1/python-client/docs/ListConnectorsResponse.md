# ListConnectorsResponse

Response for listing Serverless VPC Access connectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectors** | [**List[Connector]**](Connector.md) | List of Serverless VPC Access connectors. | [optional] 
**next_page_token** | **str** | Continuation token. | [optional] 

## Example

```python
from openapi_client.models.list_connectors_response import ListConnectorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectorsResponse from a JSON string
list_connectors_response_instance = ListConnectorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConnectorsResponse.to_json())

# convert the object into a dict
list_connectors_response_dict = list_connectors_response_instance.to_dict()
# create an instance of ListConnectorsResponse from a dict
list_connectors_response_from_dict = ListConnectorsResponse.from_dict(list_connectors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


