# LicenseeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**Licensee**](Licensee.md) |  | 

## Example

```python
from openapi_client.models.licensee_response import LicenseeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseeResponse from a JSON string
licensee_response_instance = LicenseeResponse.from_json(json)
# print the JSON string representation of the object
print(LicenseeResponse.to_json())

# convert the object into a dict
licensee_response_dict = licensee_response_instance.to_dict()
# create an instance of LicenseeResponse from a dict
licensee_response_from_dict = LicenseeResponse.from_dict(licensee_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


