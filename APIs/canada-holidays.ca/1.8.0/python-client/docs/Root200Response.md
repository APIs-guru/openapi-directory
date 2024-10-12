# Root200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Root200ResponseLinks**](Root200ResponseLinks.md) |  | [optional] 
**message** | **str** | A welcome message | [optional] 

## Example

```python
from openapi_client.models.root200_response import Root200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Root200Response from a JSON string
root200_response_instance = Root200Response.from_json(json)
# print the JSON string representation of the object
print(Root200Response.to_json())

# convert the object into a dict
root200_response_dict = root200_response_instance.to_dict()
# create an instance of Root200Response from a dict
root200_response_from_dict = Root200Response.from_dict(root200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


