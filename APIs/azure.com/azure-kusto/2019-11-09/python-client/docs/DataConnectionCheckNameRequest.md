# DataConnectionCheckNameRequest

A data connection check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Data Connection name. | 
**type** | **str** | The type of resource, Microsoft.Kusto/clusters/databases/dataConnections. | 

## Example

```python
from openapi_client.models.data_connection_check_name_request import DataConnectionCheckNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataConnectionCheckNameRequest from a JSON string
data_connection_check_name_request_instance = DataConnectionCheckNameRequest.from_json(json)
# print the JSON string representation of the object
print(DataConnectionCheckNameRequest.to_json())

# convert the object into a dict
data_connection_check_name_request_dict = data_connection_check_name_request_instance.to_dict()
# create an instance of DataConnectionCheckNameRequest from a dict
data_connection_check_name_request_from_dict = DataConnectionCheckNameRequest.from_dict(data_connection_check_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


