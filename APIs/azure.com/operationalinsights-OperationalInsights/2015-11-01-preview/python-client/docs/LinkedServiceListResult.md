# LinkedServiceListResult

The list linked service operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LinkedService]**](LinkedService.md) | Gets or sets a list of linked service instances. | [optional] 

## Example

```python
from openapi_client.models.linked_service_list_result import LinkedServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedServiceListResult from a JSON string
linked_service_list_result_instance = LinkedServiceListResult.from_json(json)
# print the JSON string representation of the object
print(LinkedServiceListResult.to_json())

# convert the object into a dict
linked_service_list_result_dict = linked_service_list_result_instance.to_dict()
# create an instance of LinkedServiceListResult from a dict
linked_service_list_result_from_dict = LinkedServiceListResult.from_dict(linked_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


