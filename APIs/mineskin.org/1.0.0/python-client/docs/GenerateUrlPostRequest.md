# GenerateUrlPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** |  | [optional] [default to 'steve']
**name** | **str** |  | [optional] 
**variant** | **str** | Skin variant - automatically determined based on the image if not specified | [optional] 
**visibility** | **int** | Visibility of the generated skin. 0 for public, 1 for private | [optional] [default to 0]
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.generate_url_post_request import GenerateUrlPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUrlPostRequest from a JSON string
generate_url_post_request_instance = GenerateUrlPostRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateUrlPostRequest.to_json())

# convert the object into a dict
generate_url_post_request_dict = generate_url_post_request_instance.to_dict()
# create an instance of GenerateUrlPostRequest from a dict
generate_url_post_request_from_dict = GenerateUrlPostRequest.from_dict(generate_url_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


