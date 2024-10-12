# GenerateUploadPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **int** |  | [optional] 
**account_id** | **int** |  | [optional] 
**data** | [**SkinData**](SkinData.md) |  | 
**duration** | **float** |  | [optional] 
**id** | **int** |  | 
**id_str** | **str** |  | [optional] 
**model** | **str** |  | 
**name** | **str** |  | [optional] 
**private** | **bool** |  | [optional] 
**server** | **str** |  | [optional] 
**timestamp** | **float** |  | [optional] 
**uuid** | **str** |  | [optional] 
**variant** | **str** |  | [optional] 
**views** | **float** |  | [optional] 
**duplicate** | **bool** |  | [optional] 
**next_request** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.generate_upload_post200_response import GenerateUploadPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadPost200Response from a JSON string
generate_upload_post200_response_instance = GenerateUploadPost200Response.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadPost200Response.to_json())

# convert the object into a dict
generate_upload_post200_response_dict = generate_upload_post200_response_instance.to_dict()
# create an instance of GenerateUploadPost200Response from a dict
generate_upload_post200_response_from_dict = GenerateUploadPost200Response.from_dict(generate_upload_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


