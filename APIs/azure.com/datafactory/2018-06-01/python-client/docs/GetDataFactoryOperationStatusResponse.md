# GetDataFactoryOperationStatusResponse

Response body structure for get data factory operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the operation. | [optional] 

## Example

```python
from openapi_client.models.get_data_factory_operation_status_response import GetDataFactoryOperationStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDataFactoryOperationStatusResponse from a JSON string
get_data_factory_operation_status_response_instance = GetDataFactoryOperationStatusResponse.from_json(json)
# print the JSON string representation of the object
print(GetDataFactoryOperationStatusResponse.to_json())

# convert the object into a dict
get_data_factory_operation_status_response_dict = get_data_factory_operation_status_response_instance.to_dict()
# create an instance of GetDataFactoryOperationStatusResponse from a dict
get_data_factory_operation_status_response_from_dict = GetDataFactoryOperationStatusResponse.from_dict(get_data_factory_operation_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


