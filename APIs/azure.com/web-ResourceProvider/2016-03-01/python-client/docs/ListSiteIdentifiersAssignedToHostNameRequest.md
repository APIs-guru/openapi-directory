# ListSiteIdentifiersAssignedToHostNameRequest

Identifies an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the object. | [optional] 

## Example

```python
from openapi_client.models.list_site_identifiers_assigned_to_host_name_request import ListSiteIdentifiersAssignedToHostNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListSiteIdentifiersAssignedToHostNameRequest from a JSON string
list_site_identifiers_assigned_to_host_name_request_instance = ListSiteIdentifiersAssignedToHostNameRequest.from_json(json)
# print the JSON string representation of the object
print(ListSiteIdentifiersAssignedToHostNameRequest.to_json())

# convert the object into a dict
list_site_identifiers_assigned_to_host_name_request_dict = list_site_identifiers_assigned_to_host_name_request_instance.to_dict()
# create an instance of ListSiteIdentifiersAssignedToHostNameRequest from a dict
list_site_identifiers_assigned_to_host_name_request_from_dict = ListSiteIdentifiersAssignedToHostNameRequest.from_dict(list_site_identifiers_assigned_to_host_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


