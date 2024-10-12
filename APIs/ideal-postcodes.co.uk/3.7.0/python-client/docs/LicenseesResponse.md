# LicenseesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**LicenseesResponseResult**](LicenseesResponseResult.md) |  | 

## Example

```python
from openapi_client.models.licensees_response import LicenseesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseesResponse from a JSON string
licensees_response_instance = LicenseesResponse.from_json(json)
# print the JSON string representation of the object
print(LicenseesResponse.to_json())

# convert the object into a dict
licensees_response_dict = licensees_response_instance.to_dict()
# create an instance of LicenseesResponse from a dict
licensees_response_from_dict = LicenseesResponse.from_dict(licensees_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


