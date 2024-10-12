# Location

An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpe_uri** | **str** | Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) | [optional] 
**path** | **str** | The path from which we gathered that this package/version is installed. | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


