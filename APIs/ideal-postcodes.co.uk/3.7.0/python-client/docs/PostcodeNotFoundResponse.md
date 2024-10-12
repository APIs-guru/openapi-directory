# PostcodeNotFoundResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**suggestions** | **List[str]** | A list of alternate nearest matching postcodes you can try | 

## Example

```python
from openapi_client.models.postcode_not_found_response import PostcodeNotFoundResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PostcodeNotFoundResponse from a JSON string
postcode_not_found_response_instance = PostcodeNotFoundResponse.from_json(json)
# print the JSON string representation of the object
print(PostcodeNotFoundResponse.to_json())

# convert the object into a dict
postcode_not_found_response_dict = postcode_not_found_response_instance.to_dict()
# create an instance of PostcodeNotFoundResponse from a dict
postcode_not_found_response_from_dict = PostcodeNotFoundResponse.from_dict(postcode_not_found_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


