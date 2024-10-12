# ListAllPadsUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**ListAllPadsUsingGET200ResponseData**](ListAllPadsUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_all_pads_using_get200_response import ListAllPadsUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllPadsUsingGET200Response from a JSON string
list_all_pads_using_get200_response_instance = ListAllPadsUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllPadsUsingGET200Response.to_json())

# convert the object into a dict
list_all_pads_using_get200_response_dict = list_all_pads_using_get200_response_instance.to_dict()
# create an instance of ListAllPadsUsingGET200Response from a dict
list_all_pads_using_get200_response_from_dict = ListAllPadsUsingGET200Response.from_dict(list_all_pads_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


