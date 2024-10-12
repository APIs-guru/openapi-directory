# PostAspspsParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Filter by country code (ISO 3166 Alpha 2), exact match pattern | [optional] 
**id** | **str** | Filter by internal id of ASPSP, exact match pattern | [optional] 
**name** | **str** | Filter by name of ASPSP, contains pattern | [optional] 
**request_info** | [**PostAspspsParamsBodyRequestInfo**](PostAspspsParamsBodyRequestInfo.md) |  | 
**return_additional_data** | [**List[AdditionalDataField]**](AdditionalDataField.md) | Specifies what additional fields for ASPSP object should be included in response | [optional] 

## Example

```python
from openapi_client.models.post_aspsps_params_body import PostAspspsParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostAspspsParamsBody from a JSON string
post_aspsps_params_body_instance = PostAspspsParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostAspspsParamsBody.to_json())

# convert the object into a dict
post_aspsps_params_body_dict = post_aspsps_params_body_instance.to_dict()
# create an instance of PostAspspsParamsBody from a dict
post_aspsps_params_body_from_dict = PostAspspsParamsBody.from_dict(post_aspsps_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


