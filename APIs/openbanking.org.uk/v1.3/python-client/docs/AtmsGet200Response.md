# AtmsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ATM]**](ATM.md) |  | 
**meta** | [**MetaData**](MetaData.md) |  | 

## Example

```python
from openapi_client.models.atms_get200_response import AtmsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AtmsGet200Response from a JSON string
atms_get200_response_instance = AtmsGet200Response.from_json(json)
# print the JSON string representation of the object
print(AtmsGet200Response.to_json())

# convert the object into a dict
atms_get200_response_dict = atms_get200_response_instance.to_dict()
# create an instance of AtmsGet200Response from a dict
atms_get200_response_from_dict = AtmsGet200Response.from_dict(atms_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


