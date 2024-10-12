# ListSiteIdentifiersAssignedToHostName200Response

Collection of identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ListSiteIdentifiersAssignedToHostName200ResponseValueInner]**](ListSiteIdentifiersAssignedToHostName200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.list_site_identifiers_assigned_to_host_name200_response import ListSiteIdentifiersAssignedToHostName200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListSiteIdentifiersAssignedToHostName200Response from a JSON string
list_site_identifiers_assigned_to_host_name200_response_instance = ListSiteIdentifiersAssignedToHostName200Response.from_json(json)
# print the JSON string representation of the object
print(ListSiteIdentifiersAssignedToHostName200Response.to_json())

# convert the object into a dict
list_site_identifiers_assigned_to_host_name200_response_dict = list_site_identifiers_assigned_to_host_name200_response_instance.to_dict()
# create an instance of ListSiteIdentifiersAssignedToHostName200Response from a dict
list_site_identifiers_assigned_to_host_name200_response_from_dict = ListSiteIdentifiersAssignedToHostName200Response.from_dict(list_site_identifiers_assigned_to_host_name200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


