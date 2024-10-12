# PostcodeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**List[PostcodeResponseResultInner]**](PostcodeResponseResultInner.md) | All addresses listed at the postcode.  If Eircode is enabled, addreses for the Republic of Ireland will be returned in the English format.  | 

## Example

```python
from openapi_client.models.postcode_response import PostcodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PostcodeResponse from a JSON string
postcode_response_instance = PostcodeResponse.from_json(json)
# print the JSON string representation of the object
print(PostcodeResponse.to_json())

# convert the object into a dict
postcode_response_dict = postcode_response_instance.to_dict()
# create an instance of PostcodeResponse from a dict
postcode_response_from_dict = PostcodeResponse.from_dict(postcode_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


