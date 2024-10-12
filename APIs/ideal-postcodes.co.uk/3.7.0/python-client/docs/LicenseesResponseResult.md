# LicenseesResponseResult

List of licensees

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** | Returns true if there are more licensees listed after the maximum number of results as implied by &#x60;limit&#x60; | [optional] 
**licensees** | [**List[Licensee]**](Licensee.md) |  | [optional] 

## Example

```python
from openapi_client.models.licensees_response_result import LicenseesResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseesResponseResult from a JSON string
licensees_response_result_instance = LicenseesResponseResult.from_json(json)
# print the JSON string representation of the object
print(LicenseesResponseResult.to_json())

# convert the object into a dict
licensees_response_result_dict = licensees_response_result_instance.to_dict()
# create an instance of LicenseesResponseResult from a dict
licensees_response_result_from_dict = LicenseesResponseResult.from_dict(licensees_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


