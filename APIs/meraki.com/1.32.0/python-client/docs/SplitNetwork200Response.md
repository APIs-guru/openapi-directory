# SplitNetwork200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resulting_networks** | [**List[GetNetwork200Response]**](GetNetwork200Response.md) | Networks after the split | [optional] 

## Example

```python
from openapi_client.models.split_network200_response import SplitNetwork200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SplitNetwork200Response from a JSON string
split_network200_response_instance = SplitNetwork200Response.from_json(json)
# print the JSON string representation of the object
print(SplitNetwork200Response.to_json())

# convert the object into a dict
split_network200_response_dict = split_network200_response_instance.to_dict()
# create an instance of SplitNetwork200Response from a dict
split_network200_response_from_dict = SplitNetwork200Response.from_dict(split_network200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


