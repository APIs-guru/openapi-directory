# CreateManagedShortLinkResponse

Response to create a short Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_short_link** | [**ManagedShortLink**](ManagedShortLink.md) |  | [optional] 
**preview_link** | **str** | Preview link to show the link flow chart. (debug info.) | [optional] 
**warning** | [**List[DynamicLinkWarning]**](DynamicLinkWarning.md) | Information about potential warnings on link creation. | [optional] 

## Example

```python
from openapi_client.models.create_managed_short_link_response import CreateManagedShortLinkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManagedShortLinkResponse from a JSON string
create_managed_short_link_response_instance = CreateManagedShortLinkResponse.from_json(json)
# print the JSON string representation of the object
print(CreateManagedShortLinkResponse.to_json())

# convert the object into a dict
create_managed_short_link_response_dict = create_managed_short_link_response_instance.to_dict()
# create an instance of CreateManagedShortLinkResponse from a dict
create_managed_short_link_response_from_dict = CreateManagedShortLinkResponse.from_dict(create_managed_short_link_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


