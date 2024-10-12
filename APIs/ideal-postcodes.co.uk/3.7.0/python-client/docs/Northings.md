# Northings

Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)  Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)  Metres from origin. E.g. `180458`  Returns an empty string if no location data is available. Otherwise a number is returned  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.northings import Northings

# TODO update the JSON string below
json = "{}"
# create an instance of Northings from a JSON string
northings_instance = Northings.from_json(json)
# print the JSON string representation of the object
print(Northings.to_json())

# convert the object into a dict
northings_dict = northings_instance.to_dict()
# create an instance of Northings from a dict
northings_from_dict = Northings.from_dict(northings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


