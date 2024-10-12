# ApplicationOperationResultList

Pageable list of application operation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ApplicationOperationResult]**](ApplicationOperationResult.md) | List of application operation results. | [optional] 

## Example

```python
from openapi_client.models.application_operation_result_list import ApplicationOperationResultList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationOperationResultList from a JSON string
application_operation_result_list_instance = ApplicationOperationResultList.from_json(json)
# print the JSON string representation of the object
print(ApplicationOperationResultList.to_json())

# convert the object into a dict
application_operation_result_list_dict = application_operation_result_list_instance.to_dict()
# create an instance of ApplicationOperationResultList from a dict
application_operation_result_list_from_dict = ApplicationOperationResultList.from_dict(application_operation_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


