# ListAcceleratorTypesResponse

Response for ListAcceleratorTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_types** | [**List[AcceleratorType]**](AcceleratorType.md) | The listed nodes. | [optional] 
**next_page_token** | **str** | The next page token or empty if none. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_accelerator_types_response import ListAcceleratorTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAcceleratorTypesResponse from a JSON string
list_accelerator_types_response_instance = ListAcceleratorTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAcceleratorTypesResponse.to_json())

# convert the object into a dict
list_accelerator_types_response_dict = list_accelerator_types_response_instance.to_dict()
# create an instance of ListAcceleratorTypesResponse from a dict
list_accelerator_types_response_from_dict = ListAcceleratorTypesResponse.from_dict(list_accelerator_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


