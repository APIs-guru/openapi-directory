# ConnectionTypesListResponse

Connection Type List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_types** | [**List[ConnectionType]**](ConnectionType.md) | Collection of connection types such as broadband and mobile. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#connectionTypesListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.connection_types_list_response import ConnectionTypesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypesListResponse from a JSON string
connection_types_list_response_instance = ConnectionTypesListResponse.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypesListResponse.to_json())

# convert the object into a dict
connection_types_list_response_dict = connection_types_list_response_instance.to_dict()
# create an instance of ConnectionTypesListResponse from a dict
connection_types_list_response_from_dict = ConnectionTypesListResponse.from_dict(connection_types_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


