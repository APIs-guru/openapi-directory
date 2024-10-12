# GoogleCloudDatacatalogV1LookerSystemSpec

Specification that applies to entries that are part `LOOKER` system (user_specified_type)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_instance_display_name** | **str** | Name of the parent Looker Instance. Empty if it does not exist. | [optional] 
**parent_instance_id** | **str** | ID of the parent Looker Instance. Empty if it does not exist. Example value: &#x60;someinstance.looker.com&#x60; | [optional] 
**parent_model_display_name** | **str** | Name of the parent Model. Empty if it does not exist. | [optional] 
**parent_model_id** | **str** | ID of the parent Model. Empty if it does not exist. | [optional] 
**parent_view_display_name** | **str** | Name of the parent View. Empty if it does not exist. | [optional] 
**parent_view_id** | **str** | ID of the parent View. Empty if it does not exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_looker_system_spec import GoogleCloudDatacatalogV1LookerSystemSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1LookerSystemSpec from a JSON string
google_cloud_datacatalog_v1_looker_system_spec_instance = GoogleCloudDatacatalogV1LookerSystemSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1LookerSystemSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_looker_system_spec_dict = google_cloud_datacatalog_v1_looker_system_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1LookerSystemSpec from a dict
google_cloud_datacatalog_v1_looker_system_spec_from_dict = GoogleCloudDatacatalogV1LookerSystemSpec.from_dict(google_cloud_datacatalog_v1_looker_system_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


