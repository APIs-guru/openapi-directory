# CommunicationsListResult

Collection of Communication resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of Communication resources. | [optional] 
**value** | [**List[CommunicationDetails]**](CommunicationDetails.md) | List of Communication resources. | [optional] 

## Example

```python
from openapi_client.models.communications_list_result import CommunicationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CommunicationsListResult from a JSON string
communications_list_result_instance = CommunicationsListResult.from_json(json)
# print the JSON string representation of the object
print(CommunicationsListResult.to_json())

# convert the object into a dict
communications_list_result_dict = communications_list_result_instance.to_dict()
# create an instance of CommunicationsListResult from a dict
communications_list_result_from_dict = CommunicationsListResult.from_dict(communications_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


