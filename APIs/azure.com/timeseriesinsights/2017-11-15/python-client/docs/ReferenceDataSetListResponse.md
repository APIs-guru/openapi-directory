# ReferenceDataSetListResponse

The response of the List Reference Data Sets operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReferenceDataSetResource]**](ReferenceDataSetResource.md) | Result of the List Reference Data Sets operation. | [optional] 

## Example

```python
from openapi_client.models.reference_data_set_list_response import ReferenceDataSetListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetListResponse from a JSON string
reference_data_set_list_response_instance = ReferenceDataSetListResponse.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetListResponse.to_json())

# convert the object into a dict
reference_data_set_list_response_dict = reference_data_set_list_response_instance.to_dict()
# create an instance of ReferenceDataSetListResponse from a dict
reference_data_set_list_response_from_dict = ReferenceDataSetListResponse.from_dict(reference_data_set_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


