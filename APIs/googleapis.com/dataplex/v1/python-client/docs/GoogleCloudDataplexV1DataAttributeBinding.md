# GoogleCloudDataplexV1DataAttributeBinding

DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} | [optional] 
**create_time** | **str** | Output only. The time when the DataAttributeBinding was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the DataAttributeBinding. | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the DataAttributeBinding. | [optional] 
**name** | **str** | Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id} | [optional] [readonly] 
**paths** | [**List[GoogleCloudDataplexV1DataAttributeBindingPath]**](GoogleCloudDataplexV1DataAttributeBindingPath.md) | Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings. | [optional] 
**resource** | **str** | Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource. | [optional] 
**uid** | **str** | Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the DataAttributeBinding was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_attribute_binding import GoogleCloudDataplexV1DataAttributeBinding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataAttributeBinding from a JSON string
google_cloud_dataplex_v1_data_attribute_binding_instance = GoogleCloudDataplexV1DataAttributeBinding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataAttributeBinding.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_attribute_binding_dict = google_cloud_dataplex_v1_data_attribute_binding_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataAttributeBinding from a dict
google_cloud_dataplex_v1_data_attribute_binding_from_dict = GoogleCloudDataplexV1DataAttributeBinding.from_dict(google_cloud_dataplex_v1_data_attribute_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


