# ListCustomConnectorVersionsResponse

Response message for Connectors.ListCustomConnectorVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_connector_versions** | [**List[CustomConnectorVersion]**](CustomConnectorVersion.md) | A list of connector versions. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_custom_connector_versions_response import ListCustomConnectorVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomConnectorVersionsResponse from a JSON string
list_custom_connector_versions_response_instance = ListCustomConnectorVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomConnectorVersionsResponse.to_json())

# convert the object into a dict
list_custom_connector_versions_response_dict = list_custom_connector_versions_response_instance.to_dict()
# create an instance of ListCustomConnectorVersionsResponse from a dict
list_custom_connector_versions_response_from_dict = ListCustomConnectorVersionsResponse.from_dict(list_custom_connector_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


