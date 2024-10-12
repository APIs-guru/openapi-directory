# Security


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_annotate** | **bool** |  | [optional] 
**can_delete** | **bool** |  | [optional] 
**can_execute** | **bool** |  | [optional] 
**can_read** | **bool** |  | [optional] 
**can_read_data** | **bool** |  | [optional] 
**can_subscribe** | **bool** |  | [optional] 
**can_subscribe_others** | **bool** |  | [optional] 
**can_write** | **bool** |  | [optional] 
**can_write_data** | **bool** |  | [optional] 
**has_admin** | **bool** |  | [optional] 
**rights** | **List[str]** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.security import Security

# TODO update the JSON string below
json = "{}"
# create an instance of Security from a JSON string
security_instance = Security.from_json(json)
# print the JSON string representation of the object
print(Security.to_json())

# convert the object into a dict
security_dict = security_instance.to_dict()
# create an instance of Security from a dict
security_from_dict = Security.from_dict(security_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


