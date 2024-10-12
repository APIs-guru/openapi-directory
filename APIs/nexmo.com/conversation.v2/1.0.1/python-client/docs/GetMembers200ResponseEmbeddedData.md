# GetMembers200ResponseEmbeddedData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[MemberList]**](MemberList.md) | List of members matching the provided filter | [optional] 

## Example

```python
from openapi_client.models.get_members200_response_embedded_data import GetMembers200ResponseEmbeddedData

# TODO update the JSON string below
json = "{}"
# create an instance of GetMembers200ResponseEmbeddedData from a JSON string
get_members200_response_embedded_data_instance = GetMembers200ResponseEmbeddedData.from_json(json)
# print the JSON string representation of the object
print(GetMembers200ResponseEmbeddedData.to_json())

# convert the object into a dict
get_members200_response_embedded_data_dict = get_members200_response_embedded_data_instance.to_dict()
# create an instance of GetMembers200ResponseEmbeddedData from a dict
get_members200_response_embedded_data_from_dict = GetMembers200ResponseEmbeddedData.from_dict(get_members200_response_embedded_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


