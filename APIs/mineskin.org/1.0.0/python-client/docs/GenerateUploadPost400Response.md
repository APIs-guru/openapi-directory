# GenerateUploadPost400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error message | 
**error_code** | **str** | Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) &amp; [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093) | [optional] 

## Example

```python
from openapi_client.models.generate_upload_post400_response import GenerateUploadPost400Response

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadPost400Response from a JSON string
generate_upload_post400_response_instance = GenerateUploadPost400Response.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadPost400Response.to_json())

# convert the object into a dict
generate_upload_post400_response_dict = generate_upload_post400_response_instance.to_dict()
# create an instance of GenerateUploadPost400Response from a dict
generate_upload_post400_response_from_dict = GenerateUploadPost400Response.from_dict(generate_upload_post400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


