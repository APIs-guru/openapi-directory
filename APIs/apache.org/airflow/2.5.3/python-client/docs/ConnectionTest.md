# ConnectionTest

Connection test results.  *New in version 2.2.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The success or failure message of the request. | [optional] 
**status** | **bool** | The status of the request. | [optional] 

## Example

```python
from openapi_client.models.connection_test import ConnectionTest

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTest from a JSON string
connection_test_instance = ConnectionTest.from_json(json)
# print the JSON string representation of the object
print(ConnectionTest.to_json())

# convert the object into a dict
connection_test_dict = connection_test_instance.to_dict()
# create an instance of ConnectionTest from a dict
connection_test_from_dict = ConnectionTest.from_dict(connection_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


