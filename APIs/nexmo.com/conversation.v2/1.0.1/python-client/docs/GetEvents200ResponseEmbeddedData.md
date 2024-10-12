# GetEvents200ResponseEmbeddedData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[AllEvents]**](AllEvents.md) | List of events matching the provided filter | [optional] 

## Example

```python
from openapi_client.models.get_events200_response_embedded_data import GetEvents200ResponseEmbeddedData

# TODO update the JSON string below
json = "{}"
# create an instance of GetEvents200ResponseEmbeddedData from a JSON string
get_events200_response_embedded_data_instance = GetEvents200ResponseEmbeddedData.from_json(json)
# print the JSON string representation of the object
print(GetEvents200ResponseEmbeddedData.to_json())

# convert the object into a dict
get_events200_response_embedded_data_dict = get_events200_response_embedded_data_instance.to_dict()
# create an instance of GetEvents200ResponseEmbeddedData from a dict
get_events200_response_embedded_data_from_dict = GetEvents200ResponseEmbeddedData.from_dict(get_events200_response_embedded_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


