# GoogleCloudDatacatalogV1RoutineSpecArgument

Input or output argument of a function or stored procedure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Specifies whether the argument is input or output. | [optional] 
**name** | **str** | The name of the argument. A return argument of a function might not have a name. | [optional] 
**type** | **str** | Type of the argument. The exact value depends on the source system and the language. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_routine_spec_argument import GoogleCloudDatacatalogV1RoutineSpecArgument

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1RoutineSpecArgument from a JSON string
google_cloud_datacatalog_v1_routine_spec_argument_instance = GoogleCloudDatacatalogV1RoutineSpecArgument.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1RoutineSpecArgument.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_routine_spec_argument_dict = google_cloud_datacatalog_v1_routine_spec_argument_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1RoutineSpecArgument from a dict
google_cloud_datacatalog_v1_routine_spec_argument_from_dict = GoogleCloudDatacatalogV1RoutineSpecArgument.from_dict(google_cloud_datacatalog_v1_routine_spec_argument_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


