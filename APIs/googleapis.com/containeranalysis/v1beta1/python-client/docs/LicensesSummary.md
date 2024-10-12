# LicensesSummary

Per license count

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of fixable vulnerabilities associated with this resource. | [optional] 
**license** | **str** | The license of the package. Note that the format of this value is not guaranteed. It may be nil, an empty string, a boolean value (A | B), a differently formed boolean value (A OR B), etc... | [optional] 

## Example

```python
from openapi_client.models.licenses_summary import LicensesSummary

# TODO update the JSON string below
json = "{}"
# create an instance of LicensesSummary from a JSON string
licenses_summary_instance = LicensesSummary.from_json(json)
# print the JSON string representation of the object
print(LicensesSummary.to_json())

# convert the object into a dict
licenses_summary_dict = licenses_summary_instance.to_dict()
# create an instance of LicensesSummary from a dict
licenses_summary_from_dict = LicensesSummary.from_dict(licenses_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


