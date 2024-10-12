# Eastings

Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).  Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).  Metres from origin. E.g. `550458`  Returns an empty string if no location data is available. Otherwise a number is returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.eastings import Eastings

# TODO update the JSON string below
json = "{}"
# create an instance of Eastings from a JSON string
eastings_instance = Eastings.from_json(json)
# print the JSON string representation of the object
print(Eastings.to_json())

# convert the object into a dict
eastings_dict = eastings_instance.to_dict()
# create an instance of Eastings from a dict
eastings_from_dict = Eastings.from_dict(eastings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


