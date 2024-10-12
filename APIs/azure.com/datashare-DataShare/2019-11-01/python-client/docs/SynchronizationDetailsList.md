# SynchronizationDetailsList

details of synchronization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[SynchronizationDetails]**](SynchronizationDetails.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.synchronization_details_list import SynchronizationDetailsList

# TODO update the JSON string below
json = "{}"
# create an instance of SynchronizationDetailsList from a JSON string
synchronization_details_list_instance = SynchronizationDetailsList.from_json(json)
# print the JSON string representation of the object
print(SynchronizationDetailsList.to_json())

# convert the object into a dict
synchronization_details_list_dict = synchronization_details_list_instance.to_dict()
# create an instance of SynchronizationDetailsList from a dict
synchronization_details_list_from_dict = SynchronizationDetailsList.from_dict(synchronization_details_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


