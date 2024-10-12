# ByCountry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ByCountryItemsInner]**](ByCountryItemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.by_country import ByCountry

# TODO update the JSON string below
json = "{}"
# create an instance of ByCountry from a JSON string
by_country_instance = ByCountry.from_json(json)
# print the JSON string representation of the object
print(ByCountry.to_json())

# convert the object into a dict
by_country_dict = by_country_instance.to_dict()
# create an instance of ByCountry from a dict
by_country_from_dict = ByCountry.from_dict(by_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


