# GoogleCloudDiscoveryengineV1betaSchema

Defines the structure and layout of a type of document data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json_schema** | **str** | The JSON representation of the schema. | [optional] 
**name** | **str** | Immutable. The full resource name of the schema, in the format of &#x60;projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}&#x60;. This field must be a UTF-8 encoded string with a length limit of 1024 characters. | [optional] 
**struct_schema** | **Dict[str, object]** | The structured representation of the schema. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_schema import GoogleCloudDiscoveryengineV1betaSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSchema from a JSON string
google_cloud_discoveryengine_v1beta_schema_instance = GoogleCloudDiscoveryengineV1betaSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSchema.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_schema_dict = google_cloud_discoveryengine_v1beta_schema_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSchema from a dict
google_cloud_discoveryengine_v1beta_schema_from_dict = GoogleCloudDiscoveryengineV1betaSchema.from_dict(google_cloud_discoveryengine_v1beta_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


