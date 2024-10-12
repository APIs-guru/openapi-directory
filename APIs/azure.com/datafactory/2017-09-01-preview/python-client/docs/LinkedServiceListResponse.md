# LinkedServiceListResponse

A list of linked service resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[LinkedServiceResource]**](LinkedServiceResource.md) | List of linked services. | 

## Example

```python
from openapi_client.models.linked_service_list_response import LinkedServiceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedServiceListResponse from a JSON string
linked_service_list_response_instance = LinkedServiceListResponse.from_json(json)
# print the JSON string representation of the object
print(LinkedServiceListResponse.to_json())

# convert the object into a dict
linked_service_list_response_dict = linked_service_list_response_instance.to_dict()
# create an instance of LinkedServiceListResponse from a dict
linked_service_list_response_from_dict = LinkedServiceListResponse.from_dict(linked_service_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


