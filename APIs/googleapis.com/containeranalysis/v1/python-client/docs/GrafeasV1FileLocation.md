# GrafeasV1FileLocation

Indicates the location at which a package was found.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1_file_location import GrafeasV1FileLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1FileLocation from a JSON string
grafeas_v1_file_location_instance = GrafeasV1FileLocation.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1FileLocation.to_json())

# convert the object into a dict
grafeas_v1_file_location_dict = grafeas_v1_file_location_instance.to_dict()
# create an instance of GrafeasV1FileLocation from a dict
grafeas_v1_file_location_from_dict = GrafeasV1FileLocation.from_dict(grafeas_v1_file_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


