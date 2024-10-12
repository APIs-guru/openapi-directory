# Limits

List of limitations on used resources, that are applied on the current instance of Registry. Keys represent the resource type and are suffixed by the corresponding unit. Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_artifact_description_length_chars** | **int** |  | [optional] 
**max_artifact_labels_count** | **int** |  | [optional] 
**max_artifact_name_length_chars** | **int** |  | [optional] 
**max_artifact_properties_count** | **int** |  | [optional] 
**max_artifacts_count** | **int** |  | [optional] 
**max_label_size_bytes** | **int** |  | [optional] 
**max_property_key_size_bytes** | **int** |  | [optional] 
**max_property_value_size_bytes** | **int** |  | [optional] 
**max_requests_per_second_count** | **int** |  | [optional] 
**max_schema_size_bytes** | **int** |  | [optional] 
**max_total_schemas_count** | **int** |  | [optional] 
**max_versions_per_artifact_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.limits import Limits

# TODO update the JSON string below
json = "{}"
# create an instance of Limits from a JSON string
limits_instance = Limits.from_json(json)
# print the JSON string representation of the object
print(Limits.to_json())

# convert the object into a dict
limits_dict = limits_instance.to_dict()
# create an instance of Limits from a dict
limits_from_dict = Limits.from_dict(limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


