# ListConnectorVersionsResponse

Response message for Connectors.ListConnectorVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_versions** | [**List[ConnectorVersion]**](ConnectorVersion.md) | A list of connector versions. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_connector_versions_response import ListConnectorVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectorVersionsResponse from a JSON string
list_connector_versions_response_instance = ListConnectorVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConnectorVersionsResponse.to_json())

# convert the object into a dict
list_connector_versions_response_dict = list_connector_versions_response_instance.to_dict()
# create an instance of ListConnectorVersionsResponse from a dict
list_connector_versions_response_from_dict = ListConnectorVersionsResponse.from_dict(list_connector_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


