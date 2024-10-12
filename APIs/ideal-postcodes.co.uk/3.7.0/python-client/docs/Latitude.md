# Latitude

The latitude of the postcode (WGS84/ETRS89).  Can be a positive or negative decimal. E.g. `51.5083983`.  Returns an empty string if no location data is available. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.latitude import Latitude

# TODO update the JSON string below
json = "{}"
# create an instance of Latitude from a JSON string
latitude_instance = Latitude.from_json(json)
# print the JSON string representation of the object
print(Latitude.to_json())

# convert the object into a dict
latitude_dict = latitude_instance.to_dict()
# create an instance of Latitude from a dict
latitude_from_dict = Latitude.from_dict(latitude_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


