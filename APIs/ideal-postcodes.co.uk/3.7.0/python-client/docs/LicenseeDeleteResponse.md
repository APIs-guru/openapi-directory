# LicenseeDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**ConfigDeleteResponseResult**](ConfigDeleteResponseResult.md) |  | 

## Example

```python
from openapi_client.models.licensee_delete_response import LicenseeDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseeDeleteResponse from a JSON string
licensee_delete_response_instance = LicenseeDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(LicenseeDeleteResponse.to_json())

# convert the object into a dict
licensee_delete_response_dict = licensee_delete_response_instance.to_dict()
# create an instance of LicenseeDeleteResponse from a dict
licensee_delete_response_from_dict = LicenseeDeleteResponse.from_dict(licensee_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


