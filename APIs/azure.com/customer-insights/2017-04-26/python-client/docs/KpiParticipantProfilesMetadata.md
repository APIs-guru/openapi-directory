# KpiParticipantProfilesMetadata

The KPI participant profile metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type_name** | **str** | Name of the type. | 

## Example

```python
from openapi_client.models.kpi_participant_profiles_metadata import KpiParticipantProfilesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of KpiParticipantProfilesMetadata from a JSON string
kpi_participant_profiles_metadata_instance = KpiParticipantProfilesMetadata.from_json(json)
# print the JSON string representation of the object
print(KpiParticipantProfilesMetadata.to_json())

# convert the object into a dict
kpi_participant_profiles_metadata_dict = kpi_participant_profiles_metadata_instance.to_dict()
# create an instance of KpiParticipantProfilesMetadata from a dict
kpi_participant_profiles_metadata_from_dict = KpiParticipantProfilesMetadata.from_dict(kpi_participant_profiles_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


