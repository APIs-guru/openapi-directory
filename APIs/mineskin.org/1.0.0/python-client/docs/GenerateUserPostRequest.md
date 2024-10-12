# GenerateUserPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** |  | [optional] [default to 'steve']
**name** | **str** |  | [optional] 
**variant** | **str** | Skin variant - automatically determined based on the image if not specified | [optional] 
**visibility** | **int** | Visibility of the generated skin. 0 for public, 1 for private | [optional] [default to 0]
**uuid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.generate_user_post_request import GenerateUserPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUserPostRequest from a JSON string
generate_user_post_request_instance = GenerateUserPostRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateUserPostRequest.to_json())

# convert the object into a dict
generate_user_post_request_dict = generate_user_post_request_instance.to_dict()
# create an instance of GenerateUserPostRequest from a dict
generate_user_post_request_from_dict = GenerateUserPostRequest.from_dict(generate_user_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


