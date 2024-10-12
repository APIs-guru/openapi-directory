# GetMyDetails200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user. | [optional] 
**id** | **str** | The id of the user. | [optional] 
**orgs** | **object** | The organizations that the user belongs to. | [optional] 
**username** | **str** | The username of the user. | [optional] 

## Example

```python
from openapi_client.models.get_my_details200_response import GetMyDetails200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMyDetails200Response from a JSON string
get_my_details200_response_instance = GetMyDetails200Response.from_json(json)
# print the JSON string representation of the object
print(GetMyDetails200Response.to_json())

# convert the object into a dict
get_my_details200_response_dict = get_my_details200_response_instance.to_dict()
# create an instance of GetMyDetails200Response from a dict
get_my_details200_response_from_dict = GetMyDetails200Response.from_dict(get_my_details200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


