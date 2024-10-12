# Regions

Region targeting data for app recovery action targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_code** | **List[str]** | Regions targeted by the recovery action. Region codes are ISO 3166 Alpha-2 country codes. For example, US stands for United States of America. See https://www.iso.org/iso-3166-country-codes.html for the complete list of country codes. | [optional] 

## Example

```python
from openapi_client.models.regions import Regions

# TODO update the JSON string below
json = "{}"
# create an instance of Regions from a JSON string
regions_instance = Regions.from_json(json)
# print the JSON string representation of the object
print(Regions.to_json())

# convert the object into a dict
regions_dict = regions_instance.to_dict()
# create an instance of Regions from a dict
regions_from_dict = Regions.from_dict(regions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


