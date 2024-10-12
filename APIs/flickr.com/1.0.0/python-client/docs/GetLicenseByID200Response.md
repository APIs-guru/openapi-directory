# GetLicenseByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | [**GetLicenseByID200ResponseLicenses**](GetLicenseByID200ResponseLicenses.md) |  | [optional] 
**stat** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_license_by_id200_response import GetLicenseByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetLicenseByID200Response from a JSON string
get_license_by_id200_response_instance = GetLicenseByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetLicenseByID200Response.to_json())

# convert the object into a dict
get_license_by_id200_response_dict = get_license_by_id200_response_instance.to_dict()
# create an instance of GetLicenseByID200Response from a dict
get_license_by_id200_response_from_dict = GetLicenseByID200Response.from_dict(get_license_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


