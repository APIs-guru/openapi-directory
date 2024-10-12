# LicensesFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**LicensesFiltersFilters**](LicensesFiltersFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.licenses_filters import LicensesFilters

# TODO update the JSON string below
json = "{}"
# create an instance of LicensesFilters from a JSON string
licenses_filters_instance = LicensesFilters.from_json(json)
# print the JSON string representation of the object
print(LicensesFilters.to_json())

# convert the object into a dict
licenses_filters_dict = licenses_filters_instance.to_dict()
# create an instance of LicensesFilters from a dict
licenses_filters_from_dict = LicensesFilters.from_dict(licenses_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


