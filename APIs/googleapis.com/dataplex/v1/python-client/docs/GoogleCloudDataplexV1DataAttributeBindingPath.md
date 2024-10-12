# GoogleCloudDataplexV1DataAttributeBindingPath

Represents a subresource of the given resource, and associated bindings with it. Currently supported subresources are column and partition schema fields within a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Optional. List of attributes to be associated with the path of the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} | [optional] 
**name** | **str** | Required. The name identifier of the path. Nested columns should be of the form: &#39;address.city&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_attribute_binding_path import GoogleCloudDataplexV1DataAttributeBindingPath

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataAttributeBindingPath from a JSON string
google_cloud_dataplex_v1_data_attribute_binding_path_instance = GoogleCloudDataplexV1DataAttributeBindingPath.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataAttributeBindingPath.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_attribute_binding_path_dict = google_cloud_dataplex_v1_data_attribute_binding_path_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataAttributeBindingPath from a dict
google_cloud_dataplex_v1_data_attribute_binding_path_from_dict = GoogleCloudDataplexV1DataAttributeBindingPath.from_dict(google_cloud_dataplex_v1_data_attribute_binding_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


