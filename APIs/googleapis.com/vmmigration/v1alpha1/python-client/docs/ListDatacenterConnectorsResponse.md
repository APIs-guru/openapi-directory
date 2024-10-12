# ListDatacenterConnectorsResponse

Response message for 'ListDatacenterConnectors' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datacenter_connectors** | [**List[DatacenterConnector]**](DatacenterConnector.md) | Output only. The list of sources response. | [optional] [readonly] 
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_datacenter_connectors_response import ListDatacenterConnectorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDatacenterConnectorsResponse from a JSON string
list_datacenter_connectors_response_instance = ListDatacenterConnectorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDatacenterConnectorsResponse.to_json())

# convert the object into a dict
list_datacenter_connectors_response_dict = list_datacenter_connectors_response_instance.to_dict()
# create an instance of ListDatacenterConnectorsResponse from a dict
list_datacenter_connectors_response_from_dict = ListDatacenterConnectorsResponse.from_dict(list_datacenter_connectors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


