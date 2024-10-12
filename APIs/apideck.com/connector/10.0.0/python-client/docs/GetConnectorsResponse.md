# GetConnectorsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Connector]**](Connector.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_connectors_response import GetConnectorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConnectorsResponse from a JSON string
get_connectors_response_instance = GetConnectorsResponse.from_json(json)
# print the JSON string representation of the object
print(GetConnectorsResponse.to_json())

# convert the object into a dict
get_connectors_response_dict = get_connectors_response_instance.to_dict()
# create an instance of GetConnectorsResponse from a dict
get_connectors_response_from_dict = GetConnectorsResponse.from_dict(get_connectors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


